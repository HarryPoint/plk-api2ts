// 宝晶物料主数据库存分布搜索VO
export interface I宝晶物料主数据库存分布搜索VO {
    // 物料id集
    materialIds: number[];
    // 当前页面
    pageNo: number;
    // 物料名称
    materialName: string;
    // 分页大小
    pageSize: number;
    // 编号
    materialCode: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料id
    materialId: number;
    // 仓库id
    storehouseIds: number[];
    // 仓位id集合
    warehouseIdList: number[];
    // 规格
    materialSpec: string;
    // 仓库用途
    storehousePurposeList: string[];
    // 仓位用途
    warehousePurposeList: string[];
}
// JSONResult«List«宝晶物料库存分布返回VO»»
export interface IJSONResultList宝晶物料库存分布返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 宝晶物料库存分布返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
