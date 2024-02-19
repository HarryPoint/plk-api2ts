// 单元格批量编辑请求
export interface ICellBatchEditRequest {
    // 表格数据ID
    rowDataIdList: number[];
    // 字段定义编码
    fieldDefineCode: string;
    // 表数据ID
    tableDataId: number;
    // 输入值
    value: string;
    // 关联表单选项列表
    selectedItemList: IAssociationFormSelectedItemInputputDTO[];
}
// AssociationFormSelectedItemInputputDTO
export interface IAssociationFormSelectedItemInputputDTO {
    // undefined
    id: number;
    // undefined
    showFieldValue: string;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
