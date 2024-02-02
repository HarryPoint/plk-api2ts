// 寄售损耗分析报表搜索VO
export interface I寄售损耗分析报表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 仓库id
    warehouseId: number[];
    // 日期开始时间 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 排序字段集
    orders: I分页排序VO[];
    // 日期结束时间 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 客户id
    customerId: number[];
    // 产品id
    majorDataIds: number[];
    // 外部编码产品id集
    outerCodeMajorDataIds: number[];
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 业务员ID列表
    businessUserIdList: number[];
    // 物料类型
    materialTypes: string[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«寄售损耗分析报表返回VO»
export interface IJSONResult寄售损耗分析报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I寄售损耗分析报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 寄售损耗分析报表返回VO
export interface I寄售损耗分析报表返回VO {
    // 数据表
    tablePage: I分页信息寄售损耗分析报表分页返回VO;
    // 未提数量
    productDimension: I寄售损耗分析图表数据返回VO[];
}
// 分页信息«寄售损耗分析报表分页返回VO»
export interface I分页信息寄售损耗分析报表分页返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I寄售损耗分析报表分页返回VO[];
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
// 寄售损耗分析报表分页返回VO
export interface I寄售损耗分析报表分页返回VO {
    // 客户ids json
    customerIdsJson: string;
    // 销售发货子表ids json
    salesDeliveryIdsJson: undefined[];
    // 客户ids
    customerIds: number[];
    // 客户id
    customerId: number;
    // 销售发货子表ids
    salesDeliveryIds: number[];
    // 客户
    customer: string;
    // 仓库
    warehouse: string;
    // 产品编码
    productNo: string;
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 期初数量
    numOfBeginningPeriod: number;
    // 送货数量
    sendQty: number;
    // 入库数量
    inboundQty: number;
    // 损耗数量
    numOfLoss: number;
    // 退货数量
    returnQty: number;
    // 未结余量
    remainingQty: number;
    // 损耗率
    lossRatio: number;
}
// 寄售损耗分析图表数据返回VO
export interface I寄售损耗分析图表数据返回VO {
    // 纵轴
    title: string;
    // 未结数量
    remainingQty: number;
}
