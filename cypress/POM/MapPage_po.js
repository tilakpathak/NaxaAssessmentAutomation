class MapPage {

  project() {
    cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(5000);
    cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
    return this;
  }

  map() {
    cy.get(".mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click().wait(3000); //click on map from dashboard
    return this;
  }

  Addlayer() {
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(3000); //click on expand-xlose icon 
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(3000); //click on sxlose icon
    cy.get("[class='material-icons naxatw-text-white naxatw-text-\[18px\]']").click(); //click on create layer buttton
    cy.get("div:nth-of-type(2) > .btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); //click on select from from
    cy.get(".pm-group > .pm-select > .pm-select_item").click({ force: true }).wait(2000); // click on form dropdown
    cy.get('div:nth-of-type(5) > .pm-modal_cntr .left-dropdown.pm-select_list > li:nth-of-type(1)').click() //select the form
    cy.get('.naxatw-space-y-2 > .pm-control').clear().type("Information Form").wait(3000) // edit the layer name 
    cy.get("div:nth-of-type(5) > .pm-modal_cntr .btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); //click on save bubtton
    return this;
  }

  editstyle() {
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .is-circle > .material-icons').click().wait(3000); //click on thrree dots
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .pm-dropdown_menu > :nth-child(2) > a').realHover().click({ force: true }); //click on edit style
    cy.get(':nth-child(1) > div > .sm-control').invoke('val', '#00ff00');
    cy.get(".is-align-center.is-flex.is-gap-15.is-start.range-slider-wrapper.sm-slider > input[name='lineOpacity']").clear().type(100);
    cy.get(".is-align-center.is-flex.is-gap-15.is-start.range-slider-wrapper.sm-slider > input[name='fillOpacity']").clear().type(100);
    cy.get(".is-center.is-flex.marker-type-footer > .is-btn.is-btn_primary.is-sm").click({ force: true }).wait(5000);
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top').wait(5000) //sroll the side  bar
    return this;
  }

  editlayername() {
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .is-circle > .material-icons').click().wait(3000); //click on thrree dots
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .pm-dropdown_menu > :nth-child(1) > a').realHover().click({ force: true }); //click on edit
    cy.get("input[name='layerName']").clear().type("Test Info Layer").wait(2000) //type the layer name 
    cy.get("[class='naxatw-space-y-5'] .is-btn_primary").click(); // click on save button
    cy.get(".dvd-sidebar-body.scrollbar").Tscrollo('top').wait(3000)
    return this;
  }

  zoomtolayer() {
    cy.get(".dvd-sidebar-body.scrollbar > div:nth-of-type(2) .is-list > div:nth-of-type(5) > li input[type='checkbox']").click().wait(3000);
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top').wait(3000)
    cy.get(".dvd-sidebar-body.scrollbar > div:nth-of-type(2) .is-list > div:nth-of-type(5) > li input[type='checkbox']").click().wait(3000);
    cy.get("button[title='Zoom in']").dblclick().wait(5000);
    cy.get("div:nth-of-type(5) > li > .is-flex.pm-checkbox > .is-end.is-flex > .false.pm-dropdown.pm-dropdown_right > .false.is-circle > .material-icons").click({ force: true }).wait(3000) //it click on three dots 
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top')
    cy.get(".pm-dropdown.pm-dropdown_option.pm-dropdown_right.pm-dropdown_show > .pm-dropdown_menu > li:nth-of-type(3) > a").realHover().wait(1500).click().wait(2000); //it click on zoom to layer
    return this;
  }

  uploadlayer() {
    cy.get("[class='material-icons naxatw-text-white naxatw-text-\[18px\]']").click(); //click on create layer buttton
    cy.get("div:nth-of-type(1) > .btnClassName.false.is-btn.is-btn_icon.is-btn_primary").click().wait(3000); //click on select from from
    cy.get("div:nth-of-type(5) > .pm-modal_cntr input[type='file']").attachFile(["DC-W-10.geojson"]).wait(2000);
    cy.get("input[name='layerName']").type("-Test");
    cy.get('.naxatw-flex > .pm-select > .pm-select_item').click();
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(2)").click().wait(3000);
    cy.get("div:nth-of-type(5) > .pm-modal_cntr .common-button.is-btn.is-btn_primary").click().wait(5000);
    return this;
  }

  delete() {
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(3000); //click on expand-xlose icon 
    cy.get("div:nth-of-type(4) .is-list .is-end.is-flex > .false.pm-dropdown.pm-dropdown_right > .false.is-circle > .material-icons").click().wait(3000);
    cy.get(".pm-dropdown.pm-dropdown_option.pm-dropdown_right.pm-dropdown_show > .pm-dropdown_menu > li:nth-of-type(4) > a").click();
    cy.get(".pm-modal.pm-modal_show > .pm-modal_cntr.pm-modal_cntr_sm > .is-center.is-flex.is-gap-10.pm-modal_footer > .common-button.is-btn.is-btn_red").click();
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top')
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(4000); //click on expand-open icon
    cy.get(".dvd-sidebar-body.scrollbar > div:nth-of-type(2) .is-list > div:nth-of-type(1) > li > .is-flex.pm-checkbox > .custom-checkbox > input[type='checkbox']").click()
    return this;
  }

  weather() {
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('bottom').wait(3000)
    cy.get("input#temperature").click().wait(7000);
    cy.get(':nth-child(2) > .pm-checkbox > .custom-checkbox > #precipitation').click().wait(7000);
    cy.get(':nth-child(2) > .pm-checkbox > .custom-checkbox > #precipitation').click()
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top').wait(3000)
    return this;
  }

  mapeicons() {
    cy.get("a[title='Fullscreen']").click().wait(5000);
    cy.get('.layer-switcher > button').click().wait(3000);
    cy.get('ul > :nth-child(2) > label').click().wait(2000);
    cy.get('ul > :nth-child(3) > label').click().wait(4000);
    cy.get('.ol-zoom-out').dblclick().wait(2000)
    cy.get('.ol-zoom-in').click().wait(2000)
    cy.get('ul > :nth-child(4) > label').click().wait(4000);
    cy.get('.ol-zoom-in').click().wait(2000)
    cy.get('.ol-zoom-out').click().wait(2000)
    cy.get("a[title='Exit Fullscreen']").click().wait(3000)
    return this;
  }

  searchbyhouse() {
    cy.get('.pm-select_item > .naxatw-bg-white').click().wait(1500); //click on house dropdown
    cy.get('[data-value="house_no"]').click({ force: true });
    cy.get('.search > .search-wrap > .pm-control').dblclick({ force: true }).type('111025').wait(5000);
    cy.get('.pm-select_item > .naxatw-bg-white').click().wait(3000); //click on house dropdown
    cy.get('[data-value="submission_id"]').click({ force: true }).wait(2000);
    cy.get('.search > .search-wrap > .pm-control').dblclick({ force: true }).type('13428').wait(5000)
    return this;
  }

  criteria() {
    cy.get("input[name='search-Site']").click({ force: true }).wait(2000) //click on region dropdown
    cy.get('.pm-select_list > :nth-child(1) > span').click({ force: true }).wait(2000); //select the region
    cy.get('.naxatw-p-2.naxatw-cursor-pointer > h6').click({ force: true }) //click on Viz

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(1) > .pm-select > .pm-select_item').click().wait(2000) //click on riskdropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li[role='tab']").click(7000) // select the risk

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(2) > .pm-select > .pm-select_item').click().wait(2000) //click on vulnerability dropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li[role='tab']").click(3000) // select the vulnerability

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(3) > .pm-select > .pm-select_item').click().wait(2000) //click on Themesdropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").click(3000) // select the themes

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(4) > .pm-select > .pm-select_item').click().wait(2000) //click on componenets
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").click(3000) // select the components

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(5) > .pm-select > .pm-select_item').click().wait(2000) //click on parametersropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(2)").click(3000) // select the parameters

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > .filter__section > :nth-child(6) > .pm-select > .pm-select_item').click().wait(2000) //click on metricsdropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").click(3000) // select the metrics

    cy.get(':nth-child(2) > .filter-container-metric > .filter-content > :nth-child(2) > .close__icon > .material-icons').click().wait(5000)

    cy.get("[class=' naxatw-flex naxatw-justify-between naxatw-items-center naxatw-gap-2'] div").click().wait(2000)
    return this;
  }

  tools() {
    cy.get(".naxatw-font-bold").click().wait(2000) //click on tools icon
    cy.get('.sidebar-collapse').click().wait(3000) //click on measmerent
    cy.get("a[title='Add Coordinate'] > .material-icons").click({ force: true }) //click on line
    // Click on the center of the map
    cy.get(':nth-of-type(3) > canvas').click('center');
    // Calculate a point to the right of the center
    // Can adjust the distance to your preference
    const canvasWidth = 974; // Adjust with the actual width of your canvas
    const canvasHeight = 646; // Adjust with the actual height of your canvas
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 3;
    const rightX = centerX; // Adjust 10 pixels to the right, you can change this value
    const rightY = centerY;
    // Double click on the point to the right of the center
    cy.get(':nth-of-type(3) > canvas').dblclick(rightX + 8, rightY, { force: true });
    cy.get('.close-icons').wait(5000).click()

    //now rectangle measmerent
    cy.get('.sidebar-collapse').click().wait(3000) //click on measmerent

    cy.get('.naxatw-pt-3 > div > .naxatw-bg-white > :nth-child(2) > a > .material-icons').click({ force: true }) //click on line
    // Click on the center of the canvas
    cy.get(':nth-of-type(3) > canvas').click('center', { force: true });

    // Click on a point to the right and below the center
    cy.get(':nth-of-type(3) > canvas').click(rightX + 10, rightY + 10, { force: true });

    // click on a point to the left and below the center
    cy.get(':nth-of-type(3) > canvas').click(rightX - 10, rightY + 10, { force: true }).wait(3000);

    // click on a point to the left and above the center
    cy.get(':nth-of-type(3) > canvas').click(rightX - 10, rightY - 10, { force: true }).wait(3000);

    // Double click on a point to the right and above the center
    cy.get(':nth-of-type(3) > canvas').dblclick(rightX + 10, rightY - 10, { force: true }).wait(3000);

    // Wait for some time (7 seconds) before clicking on the close icon again
    cy.get('.close-icons').wait(5000).click()
    return this;
  }

  download() {
    cy.get("a[title='Export map'] > .material-icons").click({ force: true })
    cy.get("input[name='title']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality")
    cy.get('.pm-modal_body > :nth-child(1) > :nth-child(2) > .pm-select > .pm-select_item').click()
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(2)").wait(3000).click({ force: true })
    cy.get('.pm-modal_body > :nth-child(1) > :nth-child(3) > .pm-select > .pm-select_item').click()
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(3)").wait(3000).click({ force: true })
    cy.get('.pm-modal_body > :nth-child(1) > :nth-child(4) > .pm-select > .pm-select_item').click()
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").wait(2000).click({ force: true })
    cy.get(':nth-child(7) > label').click().wait(4000)
    cy.get('.pm-modal_body > :nth-child(1) > .is-flex > .common-button').click({ force: true }).wait(15000)
  }

  drawsite() {
    cy.get("a[title='Add New Site']").click()
    cy.get('.naxatw-w-full > .pm-select > .pm-select_item').click()
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").wait(2000).click()
    cy.get(':nth-child(2) > .naxatw-space-y-2 > .pm-control').type("123")
    cy.get('.naxatw-flex > [type="submit"]').click()
    cy.get(".error").should('have.text', 'Geometry is Required.')
    cy.get("a[title='Add New Site']").click({force:true})
    return this;
  }

  remove(){
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .is-circle > .material-icons').click().wait(3000); //click on thrree dots
    cy.get(':nth-child(2) > .acc-list > .acc-body > .is-list > :nth-child(1) > [title=""] > .pm-checkbox > .is-end > .pm-dropdown > .pm-dropdown_menu > :nth-child(4) > a').realHover().click({ force: true }); //click on remove
    cy.get('.pm-modal_show > .pm-modal_cntr > .pm-modal_footer > .common-button').wait(2000).click();
    cy.get(".dvd-sidebar-body.scrollbar").scrollTo('top')
    return this;
  }

}

export default MapPage;
