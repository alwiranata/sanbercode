import Card from "./Card";

function App() {
  return (
    <div className="container">
      <h1>🚗 Layanan Cuci Mobil</h1>
      <Card
        title="Cuci Eksterior"
        detail="Pembersih bagian luar mobil hingga bersih"
        price={50000}
      />
      <Card
        title="Cuci Interior"
        detail="Pembersih bagian dalam mobil secara detail"
        price={50000}
      />
    </div>
  );
}

export default App;
