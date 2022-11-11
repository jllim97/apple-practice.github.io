import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {OptionsCollapseComponent} from "../../components/options-collapse/options-collapse.component";
import {StickyHeaderComponent} from "../../../core/components/sticky-header/sticky-header.component";

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
  price: number
}

export interface ConnectivityOption {
  id: number,
  connectivity: string;
  price: number;
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
  stickyHeader?: StickyHeaderComponent;
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
  isColorCollapsed: boolean = false;
  isStorageCollapsed: boolean = false;
  isConnectivityCollapsed: boolean = false;
  isEngravingCollapsed: boolean = false;
  isAddOnCollapsed: boolean = false;
  price: number = 2099;
  storagePrice: number = 0;
  connectivityPrice: number = 0;
  totalPrice: number = 0;
  storages: StorageOption[] = [
    {
      id: 1,
      size: '64',
      selected: false,
      templateName: 'sixtyFour',
      price: 0
    },
    {
      id: 2,
      size: '256',
      selected: false,
      templateName: 'twoFiveSix',
      price: 750
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
      price: 0,
      selected: false
    },
    {
      id: 2,
      connectivity: 'Wi-Fi + Cellular',
      price: 750,
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
    this.isColorCollapsed = true;
    this.currentStep = 2;

    this.scrollWindow('finishOption')
  }


  onStorageSelected(event: { option: string, title: string, id?: number }) {
    const {id, option} = event;
    this.storages = this.storages.map(storage => {
      storage.selected = storage.id === id;
      return storage;
    })
    this.selectedStorage = option;
    this.isStorageSelected = true;
    this.isStorageCollapsed = true;
    this.currentStep = 3;
    this.storagePrice = (this.storages.find(storage => storage.id === id)?.price ?? 0);
    this.scrollWindow('storageOption')
  }


  onChangeOptions(option: string) {
    switch (option) {
      case 'connectivity':
        this.isConnectivityCollapsed = false;
        break;
      case 'storage':
        this.isStorageCollapsed = false;
        break;
      case 'color':
        this.isColorCollapsed = false;
        break;
      case 'personalize':
        this.isEngravingCollapsed = false;
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
    this.isConnectivityCollapsed = true;
    this.currentStep = 4;
    this.connectivityPrice = this.connectivities.find(color => color.id === id)?.price || 0;

    this.scrollWindow('connectivityOption')
  }

  onEngravingOptionSelected(event: any) {
    const {option} = event;
    this.selectedEngravingOption = option;
    this.isEngravingOptionSelected = true;
    this.isEngravingCollapsed = true;
    this.currentStep = 5;
    this.scrollWindow('engravingOption')
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
    if (action === 'add') {
      this.isApplePenAdded = true;
      this.isPenInfoVisible = false;
      setTimeout(() => {
        this.updateAddOnParentHeight()
      }, 150)
    } else if (action === 'remove') {
      this.isApplePenAdded = false;
      this.isPenInfoVisible = true;

      setTimeout(() => {
        this.updateAddOnParentHeight()
      }, 150)
    }
  }

  onEditApplePen() {
    this.isPenInfoVisible = true;
    setTimeout(() => {
      this.updateAddOnParentHeight()
    }, 150)  }

  showModal() {
    this.isModalVisible = true;
  }

  scrollWindow(id: string) {
    let headerHeight: number = 48;
    setTimeout(() => {
      let target = document.getElementById(id)?.offsetTop;
      if (window.screen.width <= 833) {
        headerHeight = 110;
      }
      window.scrollTo({top: (target || 0) - headerHeight, behavior: 'smooth'})
    }, 500)

  }

  get totalAmount() {
    return this.price + this.storagePrice + this.connectivityPrice;
  }
}
