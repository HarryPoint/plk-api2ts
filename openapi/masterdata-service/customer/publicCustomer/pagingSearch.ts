// 分页
export interface I分页 {
    // 当前页面
    pageNo: number;
    // 行政区划编码，精确匹配
    regionCode: string;
    // 客户级别，精确匹配
    customerType: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 客户名称，模糊匹配
    name: string;
    // 客户来源，精确匹配
    customerSource: string;
    // 开始时间起始， yyyy-MM-dd HH:mm:ss
    createTimeBegin: string;
    // 开始时间截至， yyyy-MM-dd HH:mm:ss
    createTimeEnd: string;
}
// JSONResult«分页信息«PublicCustomerOutputVO»»
export interface IJSONResult分页信息PublicCustomerOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«PublicCustomerOutputVO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
