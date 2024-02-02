// 宝晶报表(库存)相关搜索VO
export interface I宝晶报表库存相关搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 物料规格
    majorDataSpec: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 外部编码
    materialOutsideCode: string;
    // 物料id集
    majorDataIds: number[];
    // 物料名称
    majorDataName: string;
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 区域id
    areaIds: number[];
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 业务员ids
    businessUserIds: number[];
    // 物料类型
    materialTypes: string[];
    // 单据名称
    billNames: string[];
    // 保管员
    materialCurators: string[];
}
// JSONResult«分页信息«宝晶报表(原材料日报表)相关返回VO»»
export interface IJSONResult分页信息宝晶报表原材料日报表相关返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«宝晶报表(原材料日报表)相关返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
