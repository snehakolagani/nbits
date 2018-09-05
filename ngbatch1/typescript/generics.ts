class Utility1 {
    reverse<T>(items: number[]): number[] {
        var toreturn = [1,2,3];
        for (let i = 10; i > toreturn.length; i--) {
            toreturn.push(5);
          console.log(toreturn);
        return toreturn;
        }
        console.log(toreturn);
      
    }
  }
  let items=new Utility1();
  items.reverse([2,3,9]);
