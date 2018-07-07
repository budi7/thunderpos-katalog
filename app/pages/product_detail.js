module.exports = {
    data() {
        return {
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="Detail Produk">
        <ActionItem tap="onEdit" ios.position="right">
          <Label style="color:#fff;" class="fa title-icon" :text="'fa-pencil' | fonticon" />
        </ActionItem>      
      </ActionBar>
      <StackLayout>
      </StackLayout>
    </Page>
    `,
};
