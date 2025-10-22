import OrdersPage from "../../pages/ordersPage";


export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
    
      <div className="max-w-full overflow-x-auto">

        <OrdersPage title="Recent Orders"/>
      </div>
    </div>
  );
}
