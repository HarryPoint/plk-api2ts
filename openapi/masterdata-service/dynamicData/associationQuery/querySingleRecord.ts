// 分页_2
export interface I分页_2 {
    // 当前表单数据
    currentFormData;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 表单字段ID
    flowPathFormFieldId: number;
}
// JSONResult«AssociationFormTypeFieldSingleRecordOutputVO»
export interface IJSONResultAssociationFormTypeFieldSingleRecordOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: AssociationFormTypeFieldSingleRecordOutputVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
