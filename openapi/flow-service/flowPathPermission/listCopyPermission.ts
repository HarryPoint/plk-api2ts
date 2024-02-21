// JSONResult«List«新增权限编辑»»_1
export interface IJSONResultListAddsPermissionEdit1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAddedPermissionEdit1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 新增权限编辑_1
export interface IAddedPermissionEdit1 {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 是否可以复制
    isCanCopy: string;
}
