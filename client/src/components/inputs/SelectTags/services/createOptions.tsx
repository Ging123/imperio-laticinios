export default function createOptions(tag:string, index:number) {
  let currentTag = tag;
  if(currentTag !== 'requeijão') currentTag += 's';
  else currentTag = 'requeijões'; 
  return <option key={index} value={tag}>{currentTag}</option>
}