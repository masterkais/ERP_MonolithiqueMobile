/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import {NavController} from "@ionic/angular";
import {Panier} from "../../modals/Panier";
import {Observable} from "rxjs";
import {environmentApi} from "../../services/rest/environnement.model";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../modals/Category";
import {Product} from "../../modals/Product";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Line chart
  //https://valor-software.com/ng2-charts/#LineChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //doughnut Chart
  // https://valor-software.com/ng2-charts/#DoughnutChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  numberSiteStockDisponible():Observable<any>{
    return this.http.get<any>(environmentApi.host+"/api/statistique/numberSiteStockDisponible");
  }
  getnumberSiteStockDisponible(){
    var i,user;
    this.numberSiteStockDisponible().subscribe((data) => {
      let info=data;

      console.log(data);



      //  this.dismissLoader();
    });
  }

  public doughnutChartLabels: Array<any> = ['Site Stock Non Disponible', 'Site Stock Disponible'];
  public doughnutChartData: Array<any> = [
    [350, 450],
    /*[50, 150],*/
  ];

  public chartClickedDonut({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHoveredDonut({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public doughnutChartType = 'doughnut'

  public barChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Array<any> = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Radar Chart
  // https://valor-software.com/ng2-charts/#RadarChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  category_list: Array<Category> = [];
  product_active_list: Array<string> = [];
  product_nonactive_list: Array<string> = [];
  listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(environmentApi.host+"/api/category/categorys");
  }
  getallCategory(){
    var cat,i,j;

    this.listCategory().subscribe((data) => {

      let info=data;

      if(info.length>0) {
        for (i = 0; i < info.length; i++) {

          this.category_list.push(info[i]['name']);
          this.getproductsByCat(info[i]['id']);
        }
      }
    })


  }
  listProduct():Observable<Product[]>{
    return this.http.get<Product[]>(environmentApi.host+"/api/product/products");
  }
  getproductsByCat(idcat){
    var prod,i,j;

    this.listProduct().subscribe((data) => {

      let info=data;
      let compactive = 0;
      let compnonactive = 0;
      if(info.length>0) {
        for (i = 0; i < info.length; i++) {
          if(info[i]['categoryId'] == idcat){
            if(info[i]['active']){
              compactive = compactive +1;
            }
            else{
              compnonactive = compnonactive +1;
            }


          }

        }
        this.product_active_list.push(compactive+'');
        this.product_nonactive_list.push(compnonactive+'');
      }

    })


    //   if(this.img_list.length>0) {


    //  }
    // }
    /* else {
     // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
     }*/

  }
  public radarChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Array<any> = this.category_list;

  public radarChartData: Array<any> = [
    { data: this.product_nonactive_list, label: 'Produits Non Active' },
    { data: this.product_active_list, label: 'Produits Active' }
  ];
  public radarChartType = 'radar';


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Pie Chart
  // https://valor-software.com/ng2-charts/#PieChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Array<any> = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];



  public changeLabels(): void {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  public addSlice(): void {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  public removeSlice(): void {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  public changeLegendPosition(): void {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Polar Area Chart
  //https://valor-software.com/ng2-charts/#PolarAreaChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  public polarAreaChartLabels: Array<any> = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Bubble Chart
  // https://valor-software.com/ng2-charts/#BubbleChart
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public bubbleChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };
  public bubbleChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: Array<any> = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  public bubbleChartColors: Array<any> = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  badgecount:any;
  produits_commandes_list : Array<Panier> = [];
  constructor(private badge: Badge,private navCtrl: NavController,private http:HttpClient

  ) {
    this.getallCategory();
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
    }
  }
  charge_compteur(){
    if (localStorage.getItem("compteur") != null) {
      this.badgecount=localStorage.getItem("compteur");
    }
    else{
      this.badgecount=0;
    }
    return this.badgecount;

  }
  ngOnInit() {
    this.badgecount=0;
  this.getnumberSiteStockDisponible();
    /*if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
      console.log('chart-produits_commandes_list-lenght  '+ this.produits_commandes_list.length);
      var i;
      for(i=0;i<this.produits_commandes_list.length;i++){
        console.log('_idProd  '+ this.produits_commandes_list[i]['_idProd']);
        console.log('_compteur  '+ this.produits_commandes_list[i]['_compteur']);
      }
    }*/

  }
  addtocart(idprod){


   // console.log('mycart2  '+ JSON.parse(localStorage.getItem("produits_commandes")));
    this.navCtrl.navigateRoot(['my-cart']);
  }
}
