<script lange="ts">
  import { HSplitPane, VSplitPane } from 'svelte-split-pane'

  export let paneObject
</script>

{#if paneObject.type === 'h'}
  <HSplitPane>
    <left slot="left">
      {#if paneObject.left}
        <svelte:self paneObject={paneObject.left} />
      {/if}
    </left>
    <right slot="right">
      {#if paneObject.right}
        <svelte:self paneObject={paneObject.right} />
      {/if}
    </right>
  </HSplitPane>
{:else if paneObject.type === 'v'}
  <VSplitPane>
    <top slot="top">
      {#if paneObject.top}
        <svelte:self paneObject={paneObject.top} />
      {/if}
    </top>
    <down slot="down">
      {#if paneObject.down}
        <svelte:self paneObject={paneObject.down} />
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
