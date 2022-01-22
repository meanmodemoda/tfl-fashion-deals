const titleBlocks = Vue.defineComponent({
  name: 'titleBlock',
  props: ['title', 'country', 'content'],
  template: `
      
      <div id="deal">
     
      <h2 style="font-family:'Fredoka One';"> {{$props.title}}</h2>
      <p style="color: orange;"><b>Country</b> {{$props.country}}</p>
      <p>{{$props.content}}</p>
     
      </div>
    `
})

export default titleBlocks;