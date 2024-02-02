// 盘点导入明细列表DTO
export interface I盘点导入明细列表DTO {
    // taskId
    taskId: number;
    // 页面提交数据
    submitCheckList: 仓库盘点仓位清单导入DTO[];
    // 导入盘点明细数据
    importCheckList: 仓库盘点仓位清单导入DTO[];
}
// JSONResult«List«仓库盘点仓位清单返回DTO»»
export interface IJSONResultList仓库盘点仓位清单返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 仓库盘点仓位清单返回DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
