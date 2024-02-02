// 宝晶报表(库存)相关搜索DTO
export interface I宝晶报表库存相关搜索DTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 物料规格
    majorDataSpec: string;
    // 排序字段集
    orders: I分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 外部编码
    materialOutsideCode: string;
    // 导出字段集
    exportFields: string[];
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 物料id集
    majorDataIds: number[];
    // 物料名称
    majorDataName: string;
    // 业务员ids
    businessUserIds: number[];
    // 区域id
    areaIds: number[];
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 物料类型
    materialTypes: string[];
    // 单据名称
    billNames: string[];
    // 保管员
    materialCurators: string[];
}
// 分页排序
export interface I分页排序 {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«宝晶报表(原材料日报表)相关返回VO»»
export interface IJSONResult分页信息宝晶报表原材料日报表相关返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息宝晶报表原材料日报表相关返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«宝晶报表(原材料日报表)相关返回VO»
export interface I分页信息宝晶报表原材料日报表相关返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I宝晶报表原材料日报表相关返回VO[];
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
// 宝晶报表(原材料日报表)相关返回VO
export interface I宝晶报表原材料日报表相关返回VO {
    // 物料id
    majorDataId: number;
    // 物料编号
    majorDataCode: string;
    // 物料名称
    majorDataName: string;
    // 物料规格
    majorDataSpec: string;
    // 外部编码
    materialOutsideCode: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
    // 期初数
    beginQuantity: number;
    // 入库数
    inQuantity: number;
    // 出库数
    outQuantity: number;
    // 期末数
    endQuantity: number;
    // 数据来源
    source: string;
}
