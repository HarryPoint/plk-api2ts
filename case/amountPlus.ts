// 添加应收账款DTO
export interface IAddAccountsReceivableDTO {
  // 客户id
  customerId: number;
  // 业务员id
  businessUserId: number;
  // 已收金额
  receivedAmount: number;
  // 应收金额
  receivableAmount: number;
}
// JSONResult«object»
export interface IJSONResultobject {
  // 返回码
  code: number;
  // 返回消息说明
  msg: string;
  // 响应结果
  data: any;
  // 服务器结果返回时的 Unix timestamp,单位毫秒
  ts: number;
}
