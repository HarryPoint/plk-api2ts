// 分页_3
export interface IPaging3 {
    // 当前页面
    pageNo: number;
    // 行政区划编码，精确匹配
    regionCode: string;
    // 客户级别，精确匹配
    customerType: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 客户名称，模糊匹配
    name: string;
    // 客户来源，精确匹配
    customerSource: string;
    // 开始时间起始， yyyy-MM-dd HH:mm:ss
    createTimeBegin: string;
    // 开始时间截至， yyyy-MM-dd HH:mm:ss
    createTimeEnd: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«PublicCustomerOutputVO»»
export interface IJSONResultPageInformationPublicCustomerOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationPublicCustomerOutputVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«PublicCustomerOutputVO»
export interface IPageInformationPublicCustomerOutputVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IPublicCustomerOutputVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// PublicCustomerOutputVO
export interface IPublicCustomerOutputVO {
    // 客户ID
    id: number;
    // 客户编码
    code: string;
    // 客户名称
    name: string;
    // 客户地址
    address: string;
    // 客户地址-行政区划编码
    addressRegionCode: string;
    // 客户地址-详细地址
    addressDetailAddress: string;
    // 客户状体
    customerStatus: string;
    // 客户级别
    customerType: string;
    // 客户来源
    customerSource: string;
    // 创建人ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建时间
    createTime: string;
}
