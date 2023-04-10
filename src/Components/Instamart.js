import React, { useState } from 'react'


const Section = ({title,description}) => {
  const[isVisible,setIsVisible] = useState(false);
  return (
  <div className='border border-black p-2 m-2'>
  <h3 className='text-xl font-bold'>{title}</h3>
  {isVisible ?  <button className='text-lg font-bold border-black' onClick={()=> setIsVisible(false)}>Hide</button>
  
  : <button className='text-lg font-bold border-black' onClick={()=> setIsVisible(true)}>show</button> 
  }
  { isVisible && <p>{description}</p>}

  </div>
  );
}

const Instamart = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'> Instamart</h1>
      <Section title={"About Instamart is lit bcz of HMR"}
      description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus, minus quaerat tempore blanditiis ipsam aspernatur suscipit molestias illum non alias, similique repellendus labore itaque, tenetur necessitatibus consequuntur nihil totam natus perspiciatis aut cum? Unde eum rerum quisquam possimus tempore at ut soluta ad repellendus enim sunt itaque porro fuga corporis blanditiis alias, aliquid cumque dolorem hic amet error consequatur. Exercitationem tempore voluptatum saepe laboriosam explicabo sequi."}/>
      <Section title={"TEAM INSTAMART"}
      description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus, minus quaerat tempore blanditiis ipsam aspernatur suscipit molestias illum non alias, similique repellendus labore itaque, tenetur necessitatibus consequuntur nihil totam natus perspiciatis aut cum? Unde eum rerum quisquam possimus tempore at ut soluta ad repellendus enim sunt itaque porro fuga corporis blanditiis alias, aliquid cumque dolorem hic amet error consequatur. Exercitationem tempore voluptatum saepe laboriosam explicabo sequi."}/>
      <Section title={"Carrers"}
      description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus, minus quaerat tempore blanditiis ipsam aspernatur suscipit molestias illum non alias, similique repellendus labore itaque, tenetur necessitatibus consequuntur nihil totam natus perspiciatis aut cum? Unde eum rerum quisquam possimus tempore at ut soluta ad repellendus enim sunt itaque porro fuga corporis blanditiis alias, aliquid cumque dolorem hic amet error consequatur. Exercitationem tempore voluptatum saepe laboriosam explicabo sequi."}/>
   
    </div>
  )
}
export default Instamart;
