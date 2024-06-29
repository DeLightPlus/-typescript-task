enum TrafficLight { Red = 'Red', Yellow = 'Yellow', Green = 'Green'  }
  
class TrafficLightRobot 
{
    private currentLight: TrafficLight;
    private lights: TrafficLight[];
  
    constructor()
    {
      this.currentLight = TrafficLight.Red;
      this.lights = [TrafficLight.Red, TrafficLight.Yellow, TrafficLight.Green];
    }
  
    public App()
    {
      console.log("Initial light: " + this.currentLight);      
    }
  
    public NextLight() 
    {
        const currentIndex = this.lights.indexOf(this.currentLight);
        let nextIndex = (currentIndex + 1);

        if(nextIndex > 2)
            nextIndex = 0;

        this.currentLight = this.lights[nextIndex];
        
        console.log(`Traffic light changed to: ${this.currentLight}`);    
    }

    public GetCurrentLight()
    {
      return this.currentLight;
    }
  }

  // Create
  const robot = new TrafficLightRobot(); 
  robot.App(); 
  
  let redshow = document.querySelector(".red")!;
  let greenshow = document.querySelector(".green")!;
  let yellowshow = document.querySelector(".yellow")!;
 
  setInterval(() =>
  {
    robot.NextLight();
    console.log(robot.GetCurrentLight());
    let nextLight = robot.GetCurrentLight()
    if(nextLight == TrafficLight.Red)
    {
      redshow.classList.remove("off");
      greenshow.classList.add("off");
      yellowshow.classList.add("off");
    }

    if (nextLight == TrafficLight.Yellow) 
    {
      yellowshow.classList.remove("off");
      greenshow.classList.add("off");
      redshow.classList.add("off");
    }
  
    if (nextLight.toString() == TrafficLight.Green) 
    {
      greenshow.classList.remove("off");
      redshow.classList.add("off");
      yellowshow.classList.add("off");
    }


  }, 10000); // Change every 10 seconds

 
  


  


  