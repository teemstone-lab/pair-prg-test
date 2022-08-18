<script lange="ts">
  import { HSplitPane, VSplitPane } from 'svelte-split-pane'

  export let paneObject
</script>

{#if paneObject.type === 'h'}
  <HSplitPane>
    <left slot="left">
      {#if paneObject.left}
        {#if paneObject.left.type === 'c'}
          <div>Cell</div>
        {:else}
          <svelte:self paneObject={paneObject.left} />
        {/if}
      {/if}
    </left>
    <right slot="right">
      {#if paneObject.right}
        {#if paneObject.right.type === 'c'}
          <div>Cell</div>
        {:else}
          <svelte:self paneObject={paneObject.right} />
        {/if}
      {/if}
    </right>
  </HSplitPane>
{:else if paneObject.type === 'v'}
  <VSplitPane>
    <top slot="top">
      {#if paneObject.top}
        {#if paneObject.top.type === 'c'}
          <div>Cell</div>
        {:else}
          <svelte:self paneObject={paneObject.top} />
        {/if}
      {/if}
    </top>
    <down slot="down">
      {#if paneObject.down}
        {#if paneObject.down.type === 'c'}
          <div>Cell</div>
        {:else}
          <svelte:self paneObject={paneObject.down} />
        {/if}
      {/if}
    </down>
  </VSplitPane>
{/if}

<style>
  left,
  right,
  top,
  down {
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
  }
  left,
  top {
    background-color: coral;
  }
  right,
  down {
    background-color: cornflowerblue;
  }
</style>
