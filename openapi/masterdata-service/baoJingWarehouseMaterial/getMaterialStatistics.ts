// 宝晶物料主数据库存搜索VO
export interface I宝晶物料主数据库存搜索VO {
    // 物料id集
    materialIds: number[];
    // 外部编码
    materialOutsideCode: string;
    // 当前页面
    pageNo: number;
    // 物料名称
    materialName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 规格
    materialSpec: string;
    // 仓库id
    storehouseIds: number[];
    // 物料种类
    materialTypes: string[];
    // 编号
    materialCode: string;
    // 仓库用途
    storehousePurposeList: string[];
    // 保管员
    materialCurators: string[];
    // 仓位用途
    warehousePurposeList: string[];
    // 材质
    materialTexture: string[];
    // 业务员id集合
    businessUserIdList: number[];
    // 工艺
    materialTechnology: string[];
    // 客户id集合
    customerIdList: number[];
    // 仓位id
    warehouseIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«宝晶物料库存统计VO»
export interface IJSONResult宝晶物料库存统计VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I宝晶物料库存统计VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 宝晶物料库存统计VO
export interface I宝晶物料库存统计VO {
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
    // 物料库存分页
    materialStorages: I分页信息宝晶物料主数据库存返回VO;
}
// 分页信息«宝晶物料主数据库存返回VO»
export interface I分页信息宝晶物料主数据库存返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I宝晶物料主数据库存返回VO[];
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
// 宝晶物料主数据库存返回VO
export interface I宝晶物料主数据库存返回VO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 规格
    spec: string;
    // 物料种类code
    type: string;
    // 物料种类
    typeName: string;
    // 单位
    unit: string;
    // 外部编码
    materialOutsideCode: string;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
    // 保管员
    materialCurator: string;
    // 材质
    materialTexture: string;
    // 工艺
    materialTechnology: string;
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 业务员id
    businessUserId: number;
    // 业务员名称
    businessUserName: string;
}
