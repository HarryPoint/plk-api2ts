// 单元格数据
export interface ICellData {
    // ID
    id: number;
    // 单元格下标
    cellIndex: number;
    // 值
    value: string;
    // 表格数据ID
    tableDataId: number;
    // 表格数据ID
    rowDataId: number;
    // 关联字段信息
    fieldDefine: IAssociatedFieldDefinition1;
    // 关联表单选项列表
    selectedItemList: IAssociationFormSelectedItemInputputDTO[];
}
// 关联字段定义_1
export interface IAssociatedFieldDefinition1 {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    name: string;
    // undefined
    fieldType: string;
    // undefined
    applicationCode: string;
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
