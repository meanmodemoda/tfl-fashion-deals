const dealBlock = Vue.defineComponent({
  name: 'dealBlocks',
  props: ['title', 'country', 'content'],
  template: `
      
      <div id="deal">
     
      <h2 style="font-family:'ObjectSans-Regular'; font-size: 2rem;"> {{$props.title.S}}</h2>
      <p style="color: orange;"><b>Country</b> {{$props.country.S}}</p>
      <p>{{$props.content.S}}</p>
     
      </div>
    `
})

export default dealBlock;