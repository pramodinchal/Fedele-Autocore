// ======================================================
// HEADER COMPONENT (Complete Navigation)
// ======================================================
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    // Calculate the base path dynamically based on current page location
    const basePath = this.getBasePath();

    this.innerHTML = `
      <div class="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 xl:px-12">

        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <a href="${basePath}index.html">
            <img src="${basePath}Assets/fedele-logo-png.png" alt="Fedele Autocore Logo"
                 class="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="${basePath}index.html" class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">Home</a>

          <!-- CNC Services -->
          <div class="relative group">
            <a href="${basePath}services/advanced-cnc-machining-services.html" class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap flex items-center">
              CNC Services
            </a>
            <div class="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-white shadow-xl rounded-lg min-w-48 border">
                <ul class="py-2">
                  <li><a href="${basePath}services/cnc-milling.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">CNC Milling</a></li>
                  <li><a href="${basePath}services/cnc-turning.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">CNC Turning</a></li>
                  <li><a href="${basePath}services/5-axis-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">5-Axis Machining</a></li>
                  <li><a href="${basePath}services/precision-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Precision Machining</a></li>
                  <li><a href="${basePath}services/cnc-prototyping.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">CNC Prototyping</a></li>
                  <li><a href="${basePath}services/custom-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Custom Machining</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Industries -->
          <div class="relative group">
            <button class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap flex items-center">
              Industries 
            </button>
            <div class="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-white shadow-xl rounded-lg min-w-56 border">
                <ul class="py-2">
                  <li><a href="${basePath}industries/defence-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Defence Industry</a></li>
                  <li><a href="${basePath}industries/oil-gas-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Oil & Gas Industry</a></li>
                  <li><a href="${basePath}industries/automotive-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Automotive Industry</a></li>
                  <li><a href="${basePath}industries/construction-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Construction Industry</a></li>
                  <li><a href="${basePath}industries/energy-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Energy Solutions</a></li>
                  <li><a href="${basePath}industries/hydraulic-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Hydraulic Power</a></li>
                  <li><a href="${basePath}industries/agriculture-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Agricultural / Tractor</a></li>
                  <li><a href="${basePath}industries/aerospace-cnc.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Aerospace Industry</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Locations -->
          <div class="relative group">
            <a href="${basePath}locations/location.html" class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Locations
            </a>
            <div class="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-white shadow-xl rounded-lg min-w-40 border">
                <ul class="py-2">
                  <!-- Melbourne -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/melbourne-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Melbourne
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/melbourne-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                      <li><a href="${basePath}locations/melbourne-precision-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">Precision Machining</a></li>
                      <li><a href="${basePath}locations/melbourne-5-axis-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">5-Axis Machining</a></li>
                    </ul>
                  </li>

                  <!-- Sydney -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/sydney-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">
                      Sydney
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/sydney-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                      <li><a href="${basePath}locations/sydney-precision-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">Precision Machining</a></li>
                    </ul>
                  </li>

                  <!-- Perth -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/perth-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">
                      Perth
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/perth-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                      <li><a href="${basePath}locations/perth-precision-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">Precision Machining</a></li>
                    </ul>
                  </li>

                  <!-- Adelaide -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/adelaide-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">
                      Adelaide
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/adelaide-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                    </ul>
                  </li>

                  <!-- Brisbane -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/brisbane-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">
                      Brisbane
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/brisbane-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                    </ul>
                  </li>

                  <!-- Darwin -->
                  <li class="relative group/sub">
                    <a href="${basePath}locations/darwin-cnc-machining.html" class="flex justify-between items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">
                      Darwin
                      <span class="ml-2">></span>
                    </a>
                    <ul class="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border min-w-40 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><a href="${basePath}locations/darwin-cnc-machining.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600">CNC Machining</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Company -->
          <div class="relative group">
            <button class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap flex items-center">
              Company 
            </button>
            <div class="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-white shadow-xl rounded-lg min-w-44 border">
                <ul class="py-2">
                  <li><a href="${basePath}company/about-us.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">About Us</a></li>
                  <li><a href="#" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Blog</a></li>
                  <li><a href="${basePath}company/capabilities.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Capabilities</a></li>
                  <li><a href="${basePath}company/certifications.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Certifications</a></li>
                  <li><a href="${basePath}company/infrastructure.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Infrastructure</a></li>
                  <li><a href="${basePath}company/small-batch-production.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Small Batch Production</a></li>
                  <li><a href="${basePath}company/large-scale-production.html" class="block px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Large Scale Production</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Components -->
          <div class="relative group">
            <button class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap flex items-center">
              Components 
            </button>
            <div class="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-white shadow-xl rounded-lg min-w-52 border">
                <ul class="py-2">
                  <li><a href="${basePath}components/drilling-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Drilling Components</a></li>
                  <li><a href="${basePath}components/engine-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Engine Components</a></li>
                  <li><a href="${basePath}components/hydraulic-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Hydraulic Components</a></li>
                  <li><a href="${basePath}components/turbine-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Turbine Components</a></li>
                  <li><a href="${basePath}components/tractor-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Tractor Components</a></li>
                  <li><a href="${basePath}components/military-components.html" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Military Components</a></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="${basePath}contact.html" class="text-sm lg:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">Contact</a>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-3 sm:space-x-4">
          <button onclick="openQuoteModal()"
                  class="bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg shadow hover:bg-orange-700 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold flex items-center justify-center min-w-[100px] sm:min-w-[120px]">
            <span class="sm:inline">Get Quote</span>
          </button>

          <button id="menu-toggle"
                  class="md:hidden text-gray-700 text-xl sm:text-2xl p-2 hover:text-orange-600 transition-colors focus:outline-none">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav id="mobile-menu" class="hidden fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300">
        <div class="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
          <img src="${basePath}Assets/fedele-logo-png.png" alt="Fedele Autocore Logo" class="h-8 sm:h-10 w-auto">
          <button id="mobile-close" class="text-gray-500 hover:text-orange-600 text-xl sm:text-2xl transition-colors p-2">
            ✕
          </button>
        </div>
        
        <div class="h-full overflow-y-auto pb-24">
          <ul class="flex flex-col py-2 sm:py-4">
            <li><a href="${basePath}index.html" class="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500 text-sm sm:text-base">
             Home</a></li>

            <!-- CNC Services Mobile -->
            <li class="border-b border-gray-100">
              <button class="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent text-sm sm:text-base"
                      onclick="window.headerComponent.toggleDropdown('mobile-servicesDropdown')">
                <div class="flex items-center">CNC Services</div>
                <span id="mobile-services-icon" class="text-gray-400 transform transition-transform">+</span>
              </button>
              <ul id="mobile-servicesDropdown" class="hidden bg-gray-50">
                <li><a href="${basePath}services/milling.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">CNC Milling</a></li>
                <li><a href="${basePath}services/turning.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">CNC Turning</a></li>
                <li><a href="${basePath}services/5-axis-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">5-Axis Machining</a></li>
                <li><a href="${basePath}services/precision-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Precision Machining</a></li>
                <li><a href="${basePath}services/prototyping.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">CNC Prototyping</a></li>
                <li><a href="${basePath}services/custom-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Custom Machining</a></li>
              </ul>
            </li>

            <!-- Industries Mobile -->
            <li class="border-b border-gray-100">
              <button class="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent text-sm sm:text-base"
                      onclick="window.headerComponent.toggleDropdown('mobile-industriesDropdown')">
                <div class="flex items-center">Industries</div>
                <span id="mobile-industries-icon" class="text-gray-400 transform transition-transform">+</span>
              </button>
              <ul id="mobile-industriesDropdown" class="hidden bg-gray-50">
                <li><a href="${basePath}industries/defence-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Defence Industry</a></li>
                <li><a href="${basePath}industries/oil-gas-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Oil & Gas Industry</a></li>
                <li><a href="${basePath}industries/automotive-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Automotive Industry</a></li>
                <li><a href="${basePath}industries/construction-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Construction Industry</a></li>
                <li><a href="${basePath}industries/energy-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Energy Solutions</a></li>
                <li><a href="${basePath}industries/hydraulic-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Hydraulic Power</a></li>
                <li><a href="${basePath}industries/agriculture-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Agricultural / Tractor</a></li>
                <li><a href="${basePath}industries/aerospace-cnc.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Aerospace Industry</a></li>
              </ul>
            </li>

            <!-- Locations Mobile -->
            <li class="border-b border-gray-100">
              <button class="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent text-sm sm:text-base"
                      onclick="window.headerComponent.toggleDropdown('mobile-locationsDropdown')">
                <div class="flex items-center">Locations</div>
                <span id="mobile-locations-icon" class="text-gray-400 transform transition-transform">+</span>
              </button>
              <ul id="mobile-locationsDropdown" class="hidden bg-gray-50">
                <!-- Melbourne -->
                <li class="border-b border-gray-50">
                  <button class="flex items-center justify-between w-full px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm"
                          onclick="window.headerComponent.toggleDropdown('mobile-melbourneDropdown')">
                    Melbourne
                    <span class="text-gray-400">+</span>
                  </button>
                  <ul id="mobile-melbourneDropdown" class="hidden bg-gray-100">
                    <li><a href="${basePath}locations/melbourne-cnc-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">CNC Machining</a></li>
                    <li><a href="${basePath}locations/melbourne-precision-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">Precision Machining</a></li>
                    <li><a href="${basePath}locations/melbourne-5-axis-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">5-Axis Machining</a></li>
                  </ul>
                </li>

                <!-- Sydney -->
                <li class="border-b border-gray-50">
                  <button class="flex items-center justify-between w-full px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm"
                          onclick="window.headerComponent.toggleDropdown('mobile-sydneyDropdown')">
                    Sydney
                    <span class="text-gray-400">+</span>
                  </button>
                  <ul id="mobile-sydneyDropdown" class="hidden bg-gray-100">
                    <li><a href="${basePath}locations/sydney-cnc-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">CNC Machining</a></li>
                    <li><a href="${basePath}locations/sydney-precision-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">Precision Machining</a></li>
                  </ul>
                </li>

                <!-- Perth -->
                <li class="border-b border-gray-50">
                  <button class="flex items-center justify-between w-full px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm"
                          onclick="window.headerComponent.toggleDropdown('mobile-perthDropdown')">
                    Perth
                    <span class="text-gray-400">+</span>
                  </button>
                  <ul id="mobile-perthDropdown" class="hidden bg-gray-100">
                    <li><a href="${basePath}locations/perth-cnc-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">CNC Machining</a></li>
                    <li><a href="${basePath}locations/perth-precision-machining.html" class="block px-12 sm:px-16 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">Precision Machining</a></li>
                  </ul>
                </li>

                <!-- Adelaide -->
                <li class="border-b border-gray-50">
                  <a href="${basePath}locations/adelaide-cnc-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Adelaide</a>
                </li>

                <!-- Brisbane -->
                <li class="border-b border-gray-50">
                  <a href="${basePath}locations/brisbane-cnc-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Brisbane</a>
                </li>

                <!-- Darwin -->
                <li>
                  <a href="${basePath}locations/darwin-cnc-machining.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Darwin</a>
                </li>
              </ul>
            </li>

            <!-- Company Mobile -->
            <li class="border-b border-gray-100">
              <button class="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent text-sm sm:text-base"
                      onclick="window.headerComponent.toggleDropdown('mobile-companyDropdown')">
                <div class="flex items-center">Company</div>
                <span id="mobile-company-icon" class="text-gray-400 transform transition-transform">+</span>
              </button>
              <ul id="mobile-companyDropdown" class="hidden bg-gray-50">
                <li><a href="${basePath}company/about-us.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">About Us</a></li>
                <li><a href="#" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Blog</a></li>
                <li><a href="${basePath}company/capabilities.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Capabilities</a></li>
                <li><a href="${basePath}company/certifications.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Certifications</a></li>
                <li><a href="${basePath}company/infrastructure.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Infrastructure</a></li>
                <li><a href="${basePath}company/small-batch-production.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Small Batch Production</a></li>
                <li><a href="${basePath}company/large-scale-production.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Large Scale Production</a></li>
              </ul>
            </li>

            <!-- Components Mobile -->
            <li class="border-b border-gray-100">
              <button class="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent text-sm sm:text-base"
                      onclick="window.headerComponent.toggleDropdown('mobile-componentsDropdown')">
                <div class="flex items-center">Components</div>
                <span id="mobile-components-icon" class="text-gray-400 transform transition-transform">+</span>
              </button>
              <ul id="mobile-componentsDropdown" class="hidden bg-gray-50">
                <li><a href="${basePath}components/drilling-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Drilling Components</a></li>
                <li><a href="${basePath}components/engine-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Engine Components</a></li>
                <li><a href="${basePath}components/hydraulic-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Hydraulic Components</a></li>
                <li><a href="${basePath}components/turbine-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Turbine Components</a></li>
                <li><a href="${basePath}components/tractor-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Tractor Components</a></li>
                <li><a href="${basePath}components/military-components.html" class="block px-8 sm:px-12 py-2 sm:py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs sm:text-sm">Military Components</a></li>
              </ul>
            </li>

            <li><a href="${basePath}contact.html" class="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500 text-sm sm:text-base">
              Contact</a></li>
          </ul>

          <!-- Mobile Quote Button -->
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white border-t border-gray-200">
            <button onclick="openQuoteModal(); window.headerComponent.closeMobileMenu();" 
                    class="w-full bg-orange-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 shadow-md flex items-center justify-center text-sm sm:text-base">
              Get Free Quote
            </button>
          </div>
        </div>
      </nav>

      <!-- Dark Overlay for Mobile Menu -->
      <div id="overlay" class="hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>
    `;

    this.initializeHeaderInteractions();
  }

  // Calculate base path based on current page location
  getBasePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;

    // If we're in root directory
    if (depth === 0 || path.endsWith('/')) {
      return './';
    }

    // If we're one level deep (e.g., /contact.html)
    if (depth === 1) {
      return '../';
    }

    // If we're two levels deep (e.g., /services/milling.html)
    if (depth === 2) {
      return '../../';
    }

    // For deeper nesting, calculate dynamically
    return '../'.repeat(depth);
  }

  initializeHeaderInteractions() {
    const toggleBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("mobile-close");
    const overlay = document.getElementById("overlay");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMobileMenu = () => {
      if (!mobileMenu || !overlay) return;

      const isOpening = mobileMenu.classList.contains("translate-x-full");

      if (isOpening) {
        mobileMenu.classList.remove("hidden", "translate-x-full");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        this.closeMobileMenu();
      }
    };

    this.closeMobileMenu = () => {
      if (mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
      }
    };

    if (toggleBtn) toggleBtn.addEventListener("click", toggleMobileMenu);
    if (closeBtn) closeBtn.addEventListener("click", this.closeMobileMenu);
    if (overlay) overlay.addEventListener("click", this.closeMobileMenu);

    // Mobile dropdown toggle function
    this.toggleDropdown = (id) => {
      const dropdown = document.getElementById(id);
      if (!dropdown) return;

      const isHidden = dropdown.classList.contains("hidden");
      const iconId = id.replace('Dropdown', '-icon');
      const icon = document.getElementById(iconId);

      if (isHidden) {
        dropdown.classList.remove("hidden");
        if (icon) {
          icon.textContent = "−";
          icon.classList.add('rotate-180');
        }
      } else {
        dropdown.classList.add("hidden");
        if (icon) {
          icon.textContent = "+";
          icon.classList.remove('rotate-180');
        }
      }
    };

    // Make toggle function globally accessible
    window.headerComponent = this;

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }
}

customElements.define("header-component", HeaderComponent);


// Location toggle

document.querySelectorAll('.industry').forEach((card) => {
  const locations = card.querySelectorAll('.location');

  locations.forEach((loc) => {
    loc.addEventListener('click', () => {
      const isActive = loc.classList.contains('active');

      // Remove active class from all spans in this card
      locations.forEach(l => l.classList.remove('active', 'bg-blue-600', 'text-white'));
      locations.forEach(l => l.classList.add('bg-gray-200', 'text-gray-700'));

      // If it wasn't active, activate it
      if (!isActive) {
        loc.classList.add('active', 'bg-blue-600', 'text-white');
        loc.classList.remove('bg-gray-200', 'text-gray-700');
      }
    });
  });
});

// FOOTER 

// footer-component.js
class FooterComponent extends HTMLElement {
  connectedCallback() {
    // Calculate the base path dynamically based on current page location
    const basePath = this.getBasePath();

    this.innerHTML = `
      <footer class="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            <!-- Column 1 -->
            <div>
                <h3 class="text-orange-600 font-bold text-lg mb-4">Fedele Autocore</h3>
                <p class="text-sm mb-4">
                    Australia's leading CNC machining specialists serving major industries
                    across Melbourne, Sydney, Perth, Adelaide, Brisbane and Darwin.
                </p>
                <div class="space-y-2">
                    <p class="text-sm flex items-start">
                        <span class="font-semibold mr-2">Phone:</span> (+91)-95-700-30000
                    </p>
                    <p class="text-sm flex items-start">
                        <span class="font-semibold mr-2">Email:</span>
                        sales@fedeleautocore.com
                    </p>
                    <p class="text-sm flex items-start">
                        <span class="font-semibold mr-2">ABN:</span> 12 345 678 901
                    </p>
                </div>
            </div>

            <!-- Column 2 -->
            <div>
                <h3 class="text-orange-600 font-bold text-lg mb-4">CNC Services</h3>
                <ul class="space-y-3">
                    <li>
                        <a href="${basePath}services/cnc-turning.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">CNC
                            Turning</a>
                    </li>
                    <li>
                        <a href="${basePath}services/cnc-milling.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">CNC
                            Milling</a>
                    </li>
                    <li>
                        <a href="${basePath}services/5-axis-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">5-Axis
                            Machining</a>
                    </li>
                    <li>
                        <a href="${basePath}services/precision-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Precision
                            Machining</a>
                    </li>
                    <li>
                        <a href="${basePath}services/cnc-prototyping.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">CNC
                            Prototyping</a>
                    </li>
                    <li>
                        <a href="${basePath}services/custom-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Custom
                            Machining</a>
                    </li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div>
                <h3 class="text-orange-600 font-bold text-lg mb-4">Australian Locations</h3>
                <ul class="space-y-3">
                    <li>
                        <a href="${basePath}locations/melbourne-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Melbourne
                            CNC</a>
                    </li>
                    <li>
                        <a href="${basePath}locations/sydney-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Sydney
                            CNC</a>
                    </li>
                    <li>
                        <a href="${basePath}locations/perth-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Perth
                            CNC</a>
                    </li>
                    <li>
                        <a href="${basePath}locations/adelaide-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Adelaide
                            CNC</a>
                    </li>
                    <li>
                        <a href="${basePath}locations/brisbane-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Brisbane
                            CNC</a>
                    </li>
                    <li>
                        <a href="${basePath}locations/darwin-cnc-machining.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Darwin
                            CNC</a>
                    </li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div>
                <h3 class="text-orange-600 font-bold text-lg mb-4">Industries Served</h3>
                <ul class="space-y-3">
                    <li>
                        <a href="${basePath}industries/defence-cnc.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Defence</a>
                    </li>
                    <li>
                        <a href="${basePath}industries/oil-gas-cnc.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Oil
                            &
                            Gas</a>
                    </li>
                    <li>
                        <a href="${basePath}industries/aerospace-cnc.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Aerospace</a>
                    </li>
                    <li>
                        <a href="${basePath}industries/automotive-cnc.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Automotive</a>
                    </li>
                    <li>
                        <a href="${basePath}industries/construction-cnc.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Manufacturing</a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Medical</a>
                    </li>
                </ul>
            </div>

            <!-- Column 5 -->
            <div>
                <h3 class="text-orange-600 font-bold text-lg mb-4">Company</h3>
                <ul class="space-y-3">
                    <li>
                        <a href="${basePath}company/about-us.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">About
                            Us</a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Industry
                            Blog</a>
                    </li>
                    <li>
                        <a href="${basePath}company/capabilities.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Capabilities</a>
                    </li>
                    <li>
                        <a href="${basePath}company/certifications.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Quality
                            Standards</a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Emerging
                            Services</a>
                    </li>
                    <li>
                        <a href="${basePath}contact.html"
                            class="text-sm hover:text-white transition-colors duration-300 flex items-center">Contact
                            Us</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="max-w-7xl mx-auto mt-10 pt-8 border-t border-gray-700">
            <div class="flex flex-col md:flex-row justify-center items-center">
                <p class="text-sm text-gray-400 mb-4 md:mb-0">
                    &copy; 2025 Fedele Autocore. &nbsp All rights reserved.
                </p>
                <div class="flex flex-wrap justify-center gap-6">
                    <a href="#" class="text-sm text-white hover:text-blue-600 transition-colors duration-300">&nbsp
                        Privacy
                        Policy</a>
                    <a href="#" class="text-sm text-white hover:text-blue-600 transition-colors duration-300">Terms of
                        Service</a>
                    <a href="#"
                        class="text-sm text-white hover:text-blue-600 transition-colors duration-300">Sitemap</a>
                    <a href="#"
                        class="text-sm text-white hover:text-blue-600 transition-colors duration-300">Careers</a>
                    <a href="#" class="text-sm text-white hover:text-blue-600 transition-colors duration-300">Supplier
                        Portal</a>
                </div>
            </div>
        </div>
      </footer>
    `;
  }

  getBasePath() {
    // Get current script path
    const currentScript = document.currentScript;
    const scriptPath = currentScript ? currentScript.src : '';

    // Calculate base path based on current page location
    const pathSegments = window.location.pathname.split('/');

    // Remove the file name (last segment)
    pathSegments.pop();

    // For root level, return empty string
    if (pathSegments.length <= 1) return '';

    // Calculate how many levels deep we are
    const depth = pathSegments.length - 1;

    // Create relative path to root
    return '../'.repeat(depth);
  }
}

// Register the custom element
customElements.define('footer-component', FooterComponent);
// ======================================================
// HEADER INTERACTION INITIALIZER
// ======================================================
function initializeHeaderInteractions() {
  const toggleBtn = document.getElementById("menu-toggle");
  const overlay = document.getElementById("overlay");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMobileMenuOpen = false;

  // Mobile menu toggle
  function toggleMobileMenu() {
    if (!mobileMenu || !overlay) return;

    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      mobileMenu.classList.remove("hidden", "translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    if (!isMobileMenuOpen) return;
    toggleMobileMenu();
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggleMobileMenu);
  if (overlay) overlay.addEventListener("click", closeMobileMenu);

  // Mobile dropdowns
  window.toggleDropdown = function (id) {
    const dropdown = document.getElementById(id);
    if (!dropdown) return;
    dropdown.classList.toggle("hidden");
  };

  console.log("✅ Header interactions initialized");
}

// ======================================================
// GLOBAL STYLE INJECTION
// ======================================================
const globalStyle = document.createElement("style");
globalStyle.textContent = `
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}
.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}
.modal.show .modal-content { transform: scale(1); }

.upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.upload-area:hover, .upload-area.dragover {
  border-color: #ea580c;
  background-color: #fef7f0;
}

.faq-answer { 
  max-height: 0; 
  overflow: hidden; 
  transition: max-height 0.3s ease-out; 
}
.faq-answer.open { 
  max-height: 200px; 
}

.city-button.active {
  background-color: #1e40af !important;
  color: white !important;
  transform: translateY(-2px) scale(1.05);
}

.header { 
  transition: transform 0.3s ease; 
}

.modal-open {
  overflow: hidden;
}

@media (max-width: 768px) {
  .nav.active {
    display: flex;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background-color: #1e40af;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .nav.active .nav-link {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}
`;
document.head.appendChild(globalStyle);

// ======================================================
// GLOBAL CONSTANTS
// ======================================================
const WEB3FORMS_ACCESS_KEY = "8c3d69c7-33b9-4688-8fcf-15355c00f7a6";

// ======================================================
// MOBILE MENU FUNCTIONS
// ======================================================
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  if (!menu || !overlay) return;

  menu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  document.body.style.overflow = overlay.classList.contains("hidden") ? "" : "hidden";
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  if (!menu || !overlay) return;
  menu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

// ======================================================
// MODAL HANDLING
// ======================================================
function openQuoteModal() {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;

  // Unhide modal
  modal.classList.remove("hidden");
  modal.style.display = "flex";

  // Lock scroll (optional)
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.classList.add("modal-open");

  // Add fade-in or show animation
  setTimeout(() => modal.classList.add("show"), 10);

  // 🧠 Delay rendering reCAPTCHA until after layout settles
  // 500ms gives the browser time to render the modal and attach its elements
  setTimeout(() => {
    console.log("♻️ Rendering reCAPTCHA inside modal...");
    renderAllRecaptchas();
  }, 500);
}



function closeQuoteModal() {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  modal.classList.remove("show");

  // Release body scroll lock immediately
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.add("hidden");
  }, 300);

  const form = document.getElementById("quoteForm");
  if (form) {
    form.reset();
    // Reset reCAPTCHA if it exists
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset();
    }
  }
  resetFileUpload();
}

// ======================================================
// FILE UPLOAD
// ======================================================
function handleFileUpload(input) {
  const files = input.files;
  const uploadArea = document.getElementById("uploadArea");
  if (!uploadArea) return;

  if (files.length > 0) {
    let fileList = `
      <div class="mb-2"><i class="fas fa-check-circle text-green-600 text-2xl"></i></div>
      <p class="text-green-600 font-semibold mb-2">${files.length} file(s) selected</p>
      <div class="text-xs text-gray-600 space-y-1">
    `;
    for (let i = 0; i < Math.min(files.length, 3); i++) {
      fileList += `<div>• ${files[i].name}</div>`;
    }
    if (files.length > 3) fileList += `<div>• ... and ${files.length - 3} more</div>`;
    fileList += "</div>";
    uploadArea.innerHTML = fileList;
  }
}

function resetFileUpload() {
  const uploadArea = document.getElementById("uploadArea");
  if (uploadArea) {
    uploadArea.innerHTML = `
      <i class="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
      <p class="text-gray-600 font-medium">Click to upload CAD files, drawings, or specifications</p>
      <p class="text-xs text-gray-500 mt-2">Supported: PDF, DWG, STEP, STP, IGS, IGES, JPG, PNG (Max 10MB each)</p>
    `;
  }
}

// ======================================================
// DOM READY INITIALIZATION
// ======================================================
document.addEventListener("DOMContentLoaded", () => {

  // ESC key closes modal & mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuoteModal();
      closeMobileMenu();
    }
  });

  // Modal click outside to close
  const modal = document.getElementById("quoteModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeQuoteModal();
    });
  }

  // ======================================================
  // FAQ ACCORDION (for + / - text icons)
  // ======================================================
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (question && answer && icon) {
      question.addEventListener("click", () => {
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

        // Close all other FAQs
        document.querySelectorAll(".faq-item").forEach((other) => {
          const otherAnswer = other.querySelector(".faq-answer");
          const otherIcon = other.querySelector(".faq-icon");
          if (otherAnswer) otherAnswer.style.maxHeight = "0px";
          if (otherIcon) otherIcon.textContent = "+";
        });

        // Toggle current one
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.textContent = "−";
        } else {
          answer.style.maxHeight = "0px";
          icon.textContent = "+";
        }
      });
    }
  });

  // ==============================
  // ✅ GLOBAL RECAPTCHA HANDLER
  // ==================================================

  (function () {
    // single site key (centralized)
    window.RECAPTCHA_SITE_KEY = "6Lf2mQAsAAAAAMayWkbocvzYmW92EO9OIBAOPiW9";

    // map DOM element => widgetId
    if (!window.recaptchaWidgets) window.recaptchaWidgets = new Map();

    // ensure functions are global (Google API will call window.onRecaptchaLoad)
    window.onRecaptchaLoad = function onRecaptchaLoad() {
      console.log("✅ reCAPTCHA API loaded (onRecaptchaLoad)");
      // kick off rendering (will retry internally if grecaptcha not ready)
      window.renderAllRecaptchas();
    };

    window.renderAllRecaptchas = function renderAllRecaptchas() {
      // guard: if API not ready, retry shortly
      if (typeof window.grecaptcha === "undefined" || !window.grecaptcha.render) {
        console.warn("⚠️ grecaptcha not ready yet — retrying in 300ms");
        setTimeout(window.renderAllRecaptchas, 300);
        return;
      }

      const nodes = document.querySelectorAll(".g-recaptcha");
      let anyRendered = false;

      nodes.forEach((el) => {
        if (window.recaptchaWidgets.has(el)) return; // skip already rendered

        try {
          // render by passing element (element or id both work)
          const widgetId = grecaptcha.render(el, {
            sitekey: window.RECAPTCHA_SITE_KEY,
            theme: "light",
          });
          window.recaptchaWidgets.set(el, widgetId);
          console.log("✅ reCAPTCHA rendered:", widgetId, el);
          anyRendered = true;
        } catch (err) {
          console.error("❌ grecaptcha.render failed for element", el, err);
        }
      });

      // if nothing rendered, try again after a delay (handles hidden modals / timing)
      if (!anyRendered && nodes.length > 0) {
        setTimeout(window.renderAllRecaptchas, 500);
      }
    };

    // watch for DOM changes (modals/forms added later)
    if (!window._recaptchaMutationObserver) {
      window._recaptchaMutationObserver = new MutationObserver(() => {
        // small debounce
        if (window._recaptchaRenderTimeout) clearTimeout(window._recaptchaRenderTimeout);
        window._recaptchaRenderTimeout = setTimeout(() => {
          window.renderAllRecaptchas();
        }, 200);
      });
      window._recaptchaMutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    // convenience: re-render after modal open if your modal code triggers a custom event
    window.addEventListener("recaptcha:render", () => {
      setTimeout(window.renderAllRecaptchas, 250);
    });
  })();



  // File upload drag/drop
  const uploadArea = document.getElementById("uploadArea");
  if (uploadArea) {
    uploadArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      uploadArea.classList.add("dragover");
    });
    uploadArea.addEventListener("dragleave", (e) => {
      e.preventDefault();
      uploadArea.classList.remove("dragover");
    });
    uploadArea.addEventListener("drop", (e) => {
      e.preventDefault();
      uploadArea.classList.remove("dragover");
      const files = e.dataTransfer.files;
      const input = document.getElementById("fileInput");
      if (input) {
        input.files = files;
        handleFileUpload(input);
      }
    });
  }

  // Form Submission (Web3Forms)
  const form = document.getElementById("quoteForm");
  const successMsg = document.getElementById("successMessage");
  const errorMsg = document.getElementById("errorMessage");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const btnLoader = document.getElementById("btnLoader");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (successMsg) successMsg.classList.add("hidden");
      if (errorMsg) errorMsg.classList.add("hidden");
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.classList.add("hidden");
      if (btnLoader) btnLoader.classList.remove("hidden");

      const formData = new FormData(form);
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "🧾 New CNC Machining Quote Request",
        from_name: `${formData.get("firstName")} ${formData.get("lastName")}`,
        message: `
Name: ${formData.get("firstName")} ${formData.get("lastName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Location: ${formData.get("location")}
Description: ${formData.get("description")}
        `.trim(),
      };

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (res.ok && result.success) {
          if (successMsg) successMsg.classList.remove("hidden");
          form.reset();
          resetFileUpload();
          setTimeout(closeQuoteModal, 3000);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        console.error("Form Error:", err);
        if (errorMsg) errorMsg.classList.remove("hidden");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.classList.remove("hidden");
        if (btnLoader) btnLoader.classList.add("hidden");
      }
    });
  }

  // Scroll Header Effect
  let lastScroll = 0;
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScroll && st > 100) header.style.transform = "translateY(-100%)";
      else header.style.transform = "translateY(0)";
      lastScroll = st;
    });
  }
});

console.log("✅ All components initialized successfully");
