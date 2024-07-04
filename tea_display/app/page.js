
import Tea_display from './TeaDisplay';

let dynamic_data = {
  name: "Brooke Bond Taaza Tea",
  origin: "India",
  description: "Brooke Bond Taaza is a special tea blend made with tea leaves from select Trustea certified gardens."
};

let Teas = [
  {
    name: "Brooke Bond Taaza Tea",
    origin: "India",
    description: "Brooke Bond Taaza is a special tea blend made with tea leaves from select Trustea certified gardens."
  },
  {
    name: "Golden Tea",
    origin: "China",
    description: "Golden Monkey tea is a high quality black tea with large leaves and an abundance of golden tips."
  },
  {
    name: "Tata Tea",
    origin: "Scotland",
    description: "Tata Tea Teaveda, a tea blend using carefully selected Assam teas with the goodness of Tulsi, Ginger, Brahmi & Cardamom crafted specially for the consumer who loves the real taste of tea."
  }
];

const Page = () => {
  return (
    <div className="app">
      {Teas.map((tea) => (
        <Tea_display 
          key={tea.name} // Adding a unique key prop
          name={tea.name}
          origin={tea.origin}
          description={tea.description}
        />
      ))}
    </div>
  );
};

export default Page;

