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
    orders: 分页排序VO[];
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
// JSONResult«寄售损耗分析报表分页返回VO»
export interface IJSONResult寄售损耗分析报表分页返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 寄售损耗分析报表分页返回VO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
