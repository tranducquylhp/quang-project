import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaoGiaCongTronComponent} from './bao-gia-cong-tron/bao-gia-cong-tron.component';
import {BaoGiaCongHopComponent} from './bao-gia-cong-hop/bao-gia-cong-hop.component';
import {BaoGiaHaoKyThuatComponent} from './bao-gia-hao-ky-thuat/bao-gia-hao-ky-thuat.component';
import {BaoGiaHoGaComponent} from './bao-gia-ho-ga/bao-gia-ho-ga.component';
import {CongTronLoeDucSanD1000Component} from './cong-tron-loe-duc-san-d1000/cong-tron-loe-duc-san-d1000.component';
import {CongTronLoeDucSanD1250Component} from './cong-tron-loe-duc-san-d1250/cong-tron-loe-duc-san-d1250.component';
import {CongTronLoeDucSanD1500Component} from './cong-tron-loe-duc-san-d1500/cong-tron-loe-duc-san-d1500.component';
import {CongTronLoeDucSanD2000Component} from './cong-tron-loe-duc-san-d2000/cong-tron-loe-duc-san-d2000.component';
import {CongTronLoeDucSanD2500Component} from './cong-tron-loe-duc-san-d2500/cong-tron-loe-duc-san-d2500.component';
import {CongTronLoeDucSanD300Component} from './cong-tron-loe-duc-san-d300/cong-tron-loe-duc-san-d300.component';
import {CongTronLoeDucSanD400Component} from './cong-tron-loe-duc-san-d400/cong-tron-loe-duc-san-d400.component';
import {CongTronLoeDucSanD500Component} from './cong-tron-loe-duc-san-d500/cong-tron-loe-duc-san-d500.component';
import {CongTronLoeDucSanD600Component} from './cong-tron-loe-duc-san-d600/cong-tron-loe-duc-san-d600.component';
import {CongTronLoeDucSanD800Component} from './cong-tron-loe-duc-san-d800/cong-tron-loe-duc-san-d800.component';
import {CongHopBeTongCoVaiDucSanH1000x1000Component} from './cong-hop-be-tong-co-vai-duc-san-h1000x1000/cong-hop-be-tong-co-vai-duc-san-h1000x1000.component';
import {CongHopBeTongDucSanComponent} from './cong-hop-be-tong-duc-san/cong-hop-be-tong-duc-san.component';
import {CongHopBeTongDucSanH1000x1000Component} from './cong-hop-be-tong-duc-san-h1000x1000/cong-hop-be-tong-duc-san-h1000x1000.component';
import {CongHopBeTongDucSanH800x800Component} from './cong-hop-be-tong-duc-san-h800x800/cong-hop-be-tong-duc-san-h800x800.component';
import {CongHopBeTongDucSanH600x800Component} from './cong-hop-be-tong-duc-san-h600x800/cong-hop-be-tong-duc-san-h600x800.component';
import {CongHopBeTongDucSanH600x600Component} from './cong-hop-be-tong-duc-san-h600x600/cong-hop-be-tong-duc-san-h600x600.component';
import {CongHopBeTongDucSanH1200x1200Component} from './cong-hop-be-tong-duc-san-h1200x1200/cong-hop-be-tong-duc-san-h1200x1200.component';
import {CongHopBeTongDucSanH1500x1500Component} from './cong-hop-be-tong-duc-san-h1500x1500/cong-hop-be-tong-duc-san-h1500x1500.component';
import {CongHopBeTongDucSanH2000x2000Component} from './cong-hop-be-tong-duc-san-h2000x2000/cong-hop-be-tong-duc-san-h2000x2000.component';
import {CongHopBeTongDucSanH2500x2500Component} from './cong-hop-be-tong-duc-san-h2500x2500/cong-hop-be-tong-duc-san-h2500x2500.component';
import {CongHopBeTongDucSanH3000x3000Component} from './cong-hop-be-tong-duc-san-h3000x3000/cong-hop-be-tong-duc-san-h3000x3000.component';
import {CongHopDoiDucSanComponent} from './cong-hop-doi-duc-san/cong-hop-doi-duc-san.component';
import {CongHopDoiDucSanH2x1000x1500Component} from './cong-hop-doi-duc-san-h2x1000x1500/cong-hop-doi-duc-san-h2x1000x1500.component';
import {CongHopDoiDucSanH2x3000x3000Component} from './cong-hop-doi-duc-san-h2x3000x3000/cong-hop-doi-duc-san-h2x3000x3000.component';
import {CongHopDoiDucSanH2x2500x2500Component} from './cong-hop-doi-duc-san-h2x2500x2500/cong-hop-doi-duc-san-h2x2500x2500.component';
import {CongHopDoiDucSanH2x2500x2000Component} from './cong-hop-doi-duc-san-h2x2500x2000/cong-hop-doi-duc-san-h2x2500x2000.component';
import {CongHopDoiDucSanH2x2000x2500Component} from './cong-hop-doi-duc-san-h2x2000x2500/cong-hop-doi-duc-san-h2x2000x2500.component';
import {CongHopDoiDucSanH2x1500x1500Component} from './cong-hop-doi-duc-san-h2x1500x1500/cong-hop-doi-duc-san-h2x1500x1500.component';
import {CongHopDoiDucSanH2x2000x2000Component} from './cong-hop-doi-duc-san-h2x2000x2000/cong-hop-doi-duc-san-h2x2000x2000.component';
import {HaoKyThuatDucSanComponent} from './hao-ky-thuat-duc-san/hao-ky-thuat-duc-san.component';
import {CongKichNgamJackingPipeComponent} from './cong-kich-ngam-jacking-pipe/cong-kich-ngam-jacking-pipe.component';
import {TamVomBeTongComponent} from './tam-vom-be-tong/tam-vom-be-tong.component';


const routes: Routes = [
  {
    path: 'bao-gia-cong-tron',
    component: BaoGiaCongTronComponent
  },
  {
    path: 'bao-gia-cong-hop',
    component: BaoGiaCongHopComponent
  },
  {
    path: 'bao-gia-hao-ky-thuat',
    component: BaoGiaHaoKyThuatComponent
  },
  {
    path: 'bao-gia-ho-ga',
    component: BaoGiaHoGaComponent
  },
  {
    path: 'cong-tron-loe-duc-san-D1000',
    component: CongTronLoeDucSanD1000Component
  },
  {
    path: 'cong-tron-loe-duc-san-D1250',
    component: CongTronLoeDucSanD1250Component
  },
  {
    path: 'cong-tron-loe-duc-san-D1500',
    component: CongTronLoeDucSanD1500Component
  },
  {
    path: 'cong-tron-loe-duc-san-D2000',
    component: CongTronLoeDucSanD2000Component
  },
  {
    path: 'cong-tron-loe-duc-san-D2500',
    component: CongTronLoeDucSanD2500Component
  },
  {
    path: 'cong-tron-loe-duc-san-D1000',
    component: CongTronLoeDucSanD1000Component
  },
  {
    path: 'cong-tron-loe-duc-san-D300',
    component: CongTronLoeDucSanD300Component
  },
  {
    path: 'cong-tron-loe-duc-san-D400',
    component: CongTronLoeDucSanD400Component
  },
  {
    path: 'cong-tron-loe-duc-san-D500',
    component: CongTronLoeDucSanD500Component
  },
  {
    path: 'cong-tron-loe-duc-san-D600',
    component: CongTronLoeDucSanD600Component
  },
  {
    path: 'cong-tron-loe-duc-san-D800',
    component: CongTronLoeDucSanD800Component
  },
  {
    path: 'cong-hop-be-tong-co-vai-duc-san-H1000x1000',
    component: CongHopBeTongCoVaiDucSanH1000x1000Component
  },
  {
    path: 'cong-hop-be-tong-duc-san',
    component: CongHopBeTongDucSanComponent
  },
  {
    path: 'cong-tron-loe-duc-san-D800',
    component: CongTronLoeDucSanD800Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H1000x1000',
    component: CongHopBeTongDucSanH1000x1000Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H1200x1200',
    component: CongHopBeTongDucSanH1200x1200Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H1500x1500',
    component: CongHopBeTongDucSanH1500x1500Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H2000x2000',
    component: CongHopBeTongDucSanH2000x2000Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H2500x2500',
    component: CongHopBeTongDucSanH2500x2500Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H3000x3000',
    component: CongHopBeTongDucSanH3000x3000Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H600x600',
    component: CongHopBeTongDucSanH600x600Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H600x800',
    component: CongHopBeTongDucSanH600x800Component
  },
  {
    path: 'cong-hop-be-tong-duc-san-H800x800',
    component: CongHopBeTongDucSanH800x800Component
  },
  {
    path: 'cong-hop-doi-duc-san',
    component: CongHopDoiDucSanComponent
  },
  {
    path: 'cong-hop-doi-duc-san-H2x1000x1500',
    component: CongHopDoiDucSanH2x1000x1500Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x1500x1500',
    component: CongHopDoiDucSanH2x1500x1500Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x2000x2000',
    component: CongHopDoiDucSanH2x2000x2000Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x2000x2500',
    component: CongHopDoiDucSanH2x2000x2500Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x2500x2000',
    component: CongHopDoiDucSanH2x2500x2000Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x2500x2500',
    component: CongHopDoiDucSanH2x2500x2500Component
  },
  {
    path: 'cong-hop-doi-duc-san-H2x3000x3000',
    component: CongHopDoiDucSanH2x3000x3000Component
  },
  {
    path: 'hao-ky-thuat-duc-san',
    component: HaoKyThuatDucSanComponent
  },
  {
    path: 'cong-kich-ngam-jacking-pipe',
    component: CongKichNgamJackingPipeComponent
  },
  {
    path: 'tam-vom-be-tong',
    component: TamVomBeTongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanPhamRoutingModule {
}
