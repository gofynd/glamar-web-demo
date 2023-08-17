import { h } from 'preact';
import SidebarItems from './SidebarItems';

const CategorySidebar = () => {
  const CDN_URL =
    'https://storage.googleapis.com/glamarx0-static-assets/static/website';
  return (
    <div className="sidebar">
      <img class="sidebar__hamburger" src={`${CDN_URL}/hamburger.png`} />
      <div class="sidebar__body">
        <div class="sidebar__title">
          <img src={`${CDN_URL}/glamar-logo.png`} class="sidebar__logo" />
        </div>
        <div class="sidebar__tabs">
          <SidebarItems />
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
