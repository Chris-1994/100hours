function createBarcode() {
  let barcode = "";
  for (var i = 1; i < 13; i++) {
    randomDigit = Math.round(Math.random(i) * 10);
    if (randomDigit === 0) {
      randomDigit = Math.round(Math.random(i) * 10);
    }
    //console.log(randomDigit);
    barcode += randomDigit.toString();
  }

  return barcode;
}




// check for all barcodes

let table = base.getTable("Products");
function getAllBarcodes();
    const barcodeList = []
    let queryResult = await table.selectRecordsAsync();
    let record = queryResult.records[0];
    const barcodes = record.getCellValue("Barcode")
    barcodeList.push(barcodes)
    return barcodeList

    EXAMPLE
// Create a record in the Tasks table
function updateRecordWithbarcode(barcode);
    let recordId = await table.createRecordAsync({
        "Barcode":barcode
    })

const r = createBarcode()
if (barcodeList.includes(r) === true) {
    console.log("hello")
}



<script>
	var ADT = ADT || {};
	ADT.Tag = ADT.Tag || {};
	ADT.Tag.t = 3;
	ADT.Tag.c = "NOK";
	ADT.Tag.tp = 1603666487;
	ADT.Tag.am = "{{order.subtotal_price | times: 0.75 | money_without_currency | remove: '.'}}";
	ADT.Tag.ti = "{{ checkout.order_name | remove: '#' }}";
	ADT.Tag.xd = "{{ comment.email | remove: ' ' | strip_newlines | downcase | md5 }}";
	ADT.Tag.cpn = "{{ discounts.first.code}}";
</script>
<script defer src="https://on.famme.no/jsTag?ap=1603666324"></script>
https://fammestore.dk/jsTag?ap=1703742877