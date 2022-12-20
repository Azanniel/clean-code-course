import { SubmitOrder } from "./use-cases/submit-order";
import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";

const postgresOrdersRepository = new PostgresOrdersRepository
const submitOrder = new SubmitOrder(postgresOrdersRepository);

submitOrder.execute({
  customerDocument: 'example-document',
  total: 1000
});