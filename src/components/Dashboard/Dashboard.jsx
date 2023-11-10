import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
        <div className="wrapper">
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

        <div className="grid-2">
            <div className="item-1">
                <h1>Personnels</h1>
                <div className="grid-2 bg-black">
                    <div className="item-1">
                        <h3>Homme</h3>
                        <div className="cercle">
                            
                            <span className="path" style={{width: "60%"}}></span>
                            <span className="percentage"></span>
                        </div>
                    </div>
                    <div className="item-1">
                        <h3>Femme</h3>
                        <div className="cercle">
                            
                            <span className="path" style={{width: "40%"}}>
                                <span className="percentage"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-1">
                <h3>Item 1</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit repellat soluta nesciunt, magnam voluptas dicta omnis molestiae provident alias illum cum incidunt id excepturi libero hic earum, laudantium beatae ipsam.
                </p>
            </div>
        </div>

        <div className="activites">
            <table className="table">
                <thead>
                    <th>Nom</th>
                    <th>Modele</th>
                    <th>Montant</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Grace Bisimwa</td>
                        <td>Air Force</td>
                        <td>25k frw</td>
                        <td>14 avril 2023</td>
                        <td>Status</td>
                        <td>
                            <div className="group visible">
                                <button className="button">checked</button>
                                <button className="button">delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Grace Bisimwa</td>
                        <td>Air Force</td>
                        <td>25k frw</td>
                        <td>14 avril 2023</td>
                        <td>Status</td>
                        <td>
                            <div className="group visible">
                                <button className="button">checked</button>
                                <button className="button">delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Grace Bisimwa</td>
                        <td>Air Force</td>
                        <td>25k frw</td>
                        <td>14 avril 2023</td>
                        <td>Status</td>
                        <td>
                            <div className="group visible">
                                <button className="button">checked</button>
                                <button className="button">delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Grace Bisimwa</td>
                        <td>Air Force</td>
                        <td>25k frw</td>
                        <td>14 avril 2023</td>
                        <td>Status</td>
                        <td>
                            <div className="group visible">
                                <button className="button">checked</button>
                                <button className="button">delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </>
  )
}

export default Dashboard