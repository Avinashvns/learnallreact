function VsjExpanse(props) {
    const expenseData = [
        {
            id: Math.round(100000 * Math.random()),
            item: 'Pepsi',
            amount: 10,
            tdate: new Date().toString()
        },
        {
            id: Math.round(100000 * Math.random()),
            item: 'Coke',
            amount: 40,
            tdate: new Date().toString()
        },
        {
            id: Math.round(100000 * Math.random()),
            item: 'Sprite',
            amount: 20,
            tdate: new Date().toString()
        }
    ];
    var i = 0;
    return <div class="row">
        <div class="col-sm-12">
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{expenseData[i].item}</td>
                        <td>{expenseData[i].amount}</td>
                        <td>{expenseData[i].tdate}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
}

export default VsjExpanse;