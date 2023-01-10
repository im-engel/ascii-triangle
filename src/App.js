import './App.css';

export const App = () => {
    
    const onInputChange=(e)=> {
        console.clear()
        const triangleHeight = e.target.value ?? 0

        if (triangleHeight <1 || isNaN(triangleHeight)) return

        for (let index = 0; index < triangleHeight; index++) {
            let asciiTriangle = ""
            let asciiTriangleSpace=""
            const spaceIndexCount = triangleHeight - index - 1

            for (let spaceIndex = 0; spaceIndex < spaceIndexCount; spaceIndex++) {
                asciiTriangleSpace +=  " "
            }

            for (let starIndex = 0; starIndex < index; starIndex++){
                asciiTriangle+="*"
            }
            
            console.log(asciiTriangleSpace + asciiTriangle + "*" + asciiTriangle + asciiTriangleSpace) 
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={onInputChange}/>
      </header>
    </div>
  );
}
