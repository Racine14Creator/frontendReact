import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
        <div className="grid">
            <div className="item">
                <h1 className="text-2xl text-bold">Personnels</h1>
                <p>
                    <span>450</span>
                    <small>Homme</small>
                </p>
            </div>
            <div className="item">
                <h1 className="text-2xl text-bold">Activites</h1>
                <p>
                    <span>230 K+</span>
                    <small>Les achats</small>
                </p>
            </div>
            <div className="item">
                <h1 className="text-2xl text-bold">Stock</h1>
                <p>
                    <span>453</span>
                    <small>Pairs de chaussures</small>
                </p>
            </div>
            <div className="item">
                <h1 className="text-2xl text-bold">Connections</h1>
                <p>
                    <span>12</span>
                    <small>This week</small>
                </p>
            </div>
            
        </div>
    </>
  )
}

export default Dashboard