module.exports = {
    data() {
        return {
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="Detail Produk">
        <ActionItem tap="onEdit"
          ios.systemIcon="2" ios.position="right"
          android.systemIcon="ic_menu_edit" android.position="actionBar">
        </ActionItem>        
      </ActionBar>
      <StackLayout>
      </StackLayout>
    </Page>
    `,
};
