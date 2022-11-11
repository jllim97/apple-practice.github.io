import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {OptionsCollapseComponent} from "../../components/options-collapse/options-collapse.component";

export interface ColorModel {
  id: number,
  color: string,
  selected: boolean
}

export interface StorageOption {
  id: number,
  size: string,
  selected: boolean,
  templateName: string,
  price: string
}

export interface ConnectivityOption {
  id: number,
  connectivity: string;
  price: string;
  selected: boolean;
}

@Component({
  selector: 'app-buy-ipad',
  templateUrl: './buy-ipad.component.html',
  styleUrls: ['./buy-ipad.component.scss']
})
export class BuyIpadComponent implements OnInit {
  @ViewChild('connectivity') connectivity?: ElementRef;
  @ViewChild('pencilScroller') pencilScroller?: ElementRef;
  @ViewChild('applePencilInner') applePencilInner?: ElementRef;
  @ViewChild('accessoriesCollapse') accessoriesCollapse?: OptionsCollapseComponent;
  @ViewChild('applePencilContent') applePencilContent?: ElementRef;
  currentStep: number = 1;
  selectedColor: string = 'landing';
  isColorSelected: boolean = false;
  selectedStorage: string = '';
  isStorageSelected: boolean = false;
  selectedConnectivity: string = '';
  isConnectivitySelected: boolean = false;
  isEngravingOptionSelected: boolean = false;
  selectedEngravingOption: string = '';
  isAddOnSelected: boolean = false;
  selectedAddOn: string = '';
  appleGalleryIndex: number = 0;
  isApplePenAdded: boolean = false;
  isPenInfoVisible: boolean = true;
  isModalVisible: boolean = false;
  storages: StorageOption[] = [
    {
      id: 1,
      size: '64',
      selected: false,
      templateName: 'sixtyFour',
      price: '2,099'
    },
    {
      id: 2,
      size: '256',
      selected: false,
      templateName: 'twoFiveSix',
      price: '2.849'
    }
  ]
  colors: ColorModel[] = [
    {
      id: 1,
      color: 'blue',
      selected: false
    },
    {
      id: 2,
      color: 'pink',
      selected: false
    },
    {
      id: 3,
      color: 'silver',
      selected: false
    },
    {
      id: 4,
      color: 'yellow',
      selected: false
    },
  ];
  connectivities: ConnectivityOption[] = [
    {
      id: 1,
      connectivity: 'Wi-Fi',
      price: '2,849.00',
      selected: false
    },
    {
      id: 2,
      connectivity: 'Wi-Fi + Cellular',
      price: '3,599.00',
      selected: false
    }
  ]

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }


  onColorSelected(event: { option: string, title: string, id?: number }) {
    this.colors = this.colors.map(color => {
      const {id} = event;
      color.selected = color.id === id;
      return color;
    })
    this.selectedColor = this.colors.find(color => color.id === event.id)?.color ?? '';
    this.isColorSelected = true;
    this.currentStep = 2;
  }


  onStorageSelected(event: { option: string, title: string, id?: number }) {
    const {id, option} = event;
    this.storages = this.storages.map(storage => {
      storage.selected = storage.id === id;
      return storage;
    })
    this.selectedStorage = option;
    this.isStorageSelected = true;
    this.currentStep = 3;
  }


  onChangeOptions(option: string) {
    switch (option) {
      case 'connectivity':
        this.isConnectivitySelected = false;
        break;
      case 'storage':
        this.isStorageSelected = false;
        break;
      case 'color':
        this.isColorSelected = false;
        break;
      case 'personalize':
        this.isEngravingOptionSelected = false;
        break;
    }
  }

  onConnectivitySelected(event: { option: string, title: string, id?: number }) {
    const {id, option} = event;
    this.connectivities = this.connectivities.map(connectivity => {
      connectivity.selected = connectivity.id === id;
      return connectivity;
    })
    this.selectedConnectivity = option;
    this.isConnectivitySelected = true;
    this.currentStep = 4;
  }

  onEngravingOptionSelected(event: any) {
    console.log('clicked')
    const {option} = event;
    this.selectedEngravingOption = option;
    this.isEngravingOptionSelected = true;
    this.currentStep = 5;
  }

  appleGalleryNext() {
    this.appleGalleryIndex += 1;
    this.scrollToImage();
  }

  appleGalleryPrevious() {
    this.appleGalleryIndex -= 1;
    this.scrollToImage();
  }

  onDotSelected(index: number) {
    this.appleGalleryIndex = index;
    this.scrollToImage();
  }

  scrollToImage() {
    this.renderer.setStyle(this.pencilScroller?.nativeElement, 'left', `-${this.appleGalleryIndex * 100}%`)
  }

  onAddOnSelected(event: any) {
    this.isAddOnSelected = !this.isAddOnSelected;
    if (this.isAddOnSelected) {
      const {height} = this.applePencilInner?.nativeElement.getBoundingClientRect();
      console.log(height);
      this.updateAddOnParentHeight(height);
      this.renderer.setStyle(this.applePencilContent?.nativeElement, 'height', `${height}px`)
    } else {
      this.renderer.setStyle(this.applePencilContent?.nativeElement, 'height', `0px`)
      setTimeout(() => {
        this.updateAddOnParentHeight()
      }, 350)
    }
    this.currentStep = 6;
  }

  updateAddOnParentHeight(height?: number) {
      this.accessoriesCollapse?.setHeight(height);
  }

  applePenAction(action: string) {
    if(action === 'add') {
      this.isApplePenAdded = true;
      this.isPenInfoVisible = false;
    } else if (action ==='remove') {
      this.isApplePenAdded = false;
      this.isPenInfoVisible = true;
    }
    }

  onEditApplePen() {
    this.isPenInfoVisible = true;
  }

  showModal() {
    this.isModalVisible = true;
  }
}
