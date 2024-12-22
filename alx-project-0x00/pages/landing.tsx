import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
       <Button title="Small - Rounded-sm" className="text-sm rounded-sm bg-blue-500 text-white" />
       <Button title="Medium - Rounded-md" className="text-base rounded-md bg-green-500 text-white" />
       <Button title="Large - Rounded-full" className="text-lg rounded-full bg-red-500 text-white" />
    </div>
  )
}
export default Landing;