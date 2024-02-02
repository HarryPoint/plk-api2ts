// 物料主数据库存搜索VO
export interface I物料主数据库存搜索VO {
    // 当前页面
    pageNo: number;
    // 物料名称
    materialName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料id集
    materialIds: number[];
    // 编号
    materialCode: string;
    // 规格
    materialSpec: string;
    // 仓库id
    storehouseIds: number[];
}
// JSONResult«物料库存统计VO»
export interface IJSONResult物料库存统计VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料库存统计VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
