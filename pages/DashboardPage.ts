import { Page } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    dashboardHeader = '//h6[text()="Dashboard"]';

}