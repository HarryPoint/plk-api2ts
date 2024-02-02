// 分页_14
export interface I分页_14 {
    // 模板名称 - 模糊查询
    templateName: string;
    // 当前页面
    pageNo: number;
    // 报表名称 - 模糊查询
    reportName: string;
    // 分页大小
    pageSize: number;
    // 创建用户ID
    createUserId: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 模板状态 - 精确匹配, -1 删除， 1 有效， 2.暂存，0 停用
    status: number;
    // 更新用户ID
    updateUserId: number;
    // 创建时间-范围开始时间
    createTimeBegin: string;
    // 更新时间 - 范围结束时间
    updateTimeEnd: string;
    // 创建时间-范围结束时间
    createTimeEnd: string;
    // 更新时间 - 范围开始时间
    updateTimeBegin: string;
}
// JSONResult«分页信息«ReportTemplateQueryResponseDTO»»
export interface IJSONResult分页信息ReportTemplateQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«ReportTemplateQueryResponseDTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
