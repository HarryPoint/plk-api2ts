// JSONResult«仓库盘点任务明细执行端返回DTO»
export interface IJSONResult仓库盘点任务明细执行端返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I仓库盘点任务明细执行端返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓库盘点任务明细执行端返回DTO
export interface I仓库盘点任务明细执行端返回DTO {
    // id
    id: number;
    // 任务号
    taskNo: string;
    // 处理人id
    handleUserId: number;
    // 处理人姓名
    handleUsername: string;
    // 盘点仓库id
    storehouseId: number;
    // 盘点仓库名称
    storehouseName: string;
    // 盘点仓库编号
    storehouseCode: string;
    // 计划开始时间
    planBeginTime: string;
    // 完成时间
    completeTime: string;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 默认盘点清单
    list: I仓库盘点任务清单执行端返回VO[];
}
// 仓库盘点任务清单执行端返回VO
export interface I仓库盘点任务清单执行端返回VO {
    // 盘点仓位id
    warehouseId: number;
    // 盘点仓位名称
    warehouseName: string;
    // 盘点仓位编号
    warehouseCode: string;
    // 仓位层级，从高至低排列
    warehouseList: IId名称编号VO[];
    // 物料集
    materialList: I仓库盘点任务清单物料执行端返回DTO[];
}
// Id，名称，编号VO
export interface IId名称编号VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
// 仓库盘点任务清单物料执行端返回DTO
export interface I仓库盘点任务清单物料执行端返回DTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料单位
    materialUnit: string;
    // 盘点数量
    quantity: number;
}
