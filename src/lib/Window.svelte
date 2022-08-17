<script lang="ts">
  let count = 0
  let windowObjs = []
  let hovering = -1
  let status = 'normal'

  const initWindowCount = 3

  const addWindow = () => {
    windowObjs = windowObjs.concat({ el: null, label: `Window${count}` })
    count += 1
  }

  function closeWindow(idx) {
    windowObjs = windowObjs.filter((_, i) => idx !== i)
  }

  while (count < initWindowCount) {
    addWindow()
  }

  function handleDragStart(e, idx) {
    status = 'dragstart'
    console.log(e.type, idx)
    e.dataTransfer.effectAllowed = 'move'
    hovering = idx
  }

  function handleDragEnter(e, idx) {
    console.log(e.type, idx)
    e.preventDefault()
  }

  function handleDragOver(e, idx) {
    status = 'dragover'
    console.log(e.type, idx)
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function handleDragDrop(e, idx) {
    status = 'dragdrop'
    console.log(e.type, idx)
    e.preventDefault()
    e.stopPropagation()

    if (hovering < 0) return

    if (idx < 0) {
      const sourceEls = windowObjs.splice(hovering, 1)
      windowObjs = [sourceEls[0], ...windowObjs]
    } else if (idx >= windowObjs.length) {
      const sourceEls = windowObjs.splice(hovering, 1)
      windowObjs = [...windowObjs, sourceEls[0]]
    } else {
      windowObjs = windowObjs.reduce((result, currentEl, i) => {
        if (i !== hovering) result.push(currentEl)
        if (i === idx) result.push(windowObjs[hovering])
        return result
      }, [])
    }

    hovering = -1
  }
</script>

<h2>{status}</h2>
<button on:click={addWindow}>Add Window </button>
<div role="grid" id="panel">
  {#each windowObjs as window_obj, idx (window_obj.label)}
    <div
      role="gridcell"
      id={window_obj.label}
      class="window_obj"
      draggable="true"
      on:dragstart={(e) => handleDragStart(e, idx)}
      on:dragenter={(e) => handleDragEnter(e, idx)}
      on:dragover={(e) => handleDragOver(e, idx)}
      on:drop={(e) => handleDragDrop(e, idx)}
      class:is-active={hovering === idx}
    >
      <div role="tab" id="{window_obj.label}_topbar" class="window_topbar">
        {window_obj.label}
      </div>
      <div
        role="tabpanel"
        id="{window_obj.label}_content"
        class="window_content"
      >
        <button class="btn_close" on:click={() => closeWindow(idx)}>X</button>
      </div>
    </div>
  {:else}
    <p>loading...</p>
  {/each}
</div>

<style>
  #panel {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
    border: 1px solid black;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    grid-auto-flow: row dense;
  }

  .window_obj {
    width: 100%;
    height: 100px;
    margin: 0px;
    text-align: center;
    font-size: 0.8rem;
  }

  .window_obj.is-active {
    border: 2px solid #ff0000;
  }

  .window_topbar {
    background: #eeeeee;
    height: 20px;
    cursor: move;
  }

  .btn_close {
    background: inherit;
    border: 0;
  }

  .window_content {
    background: #ffff77;
    height: 80px;
  }
</style>
