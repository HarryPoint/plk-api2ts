// 分页_5
export interface I分页_5 {
    // 编码匹配
    codeMatch: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 创建用户ID列表
    createUserIdList: number[];
    // 排序字段集
    orders: 分页排序VO[];
    // 方案名称匹配
    nameMatch: string;
    // 类型列表
    planTypeList: string[];
    // 创建时间范围的开始
    createTimeBegin: string;
    // 创建时间范围的结束
    createTimeEnd: string;
}
// JSONResult«分页信息«LotSerialNumberPlanPageQueryResponseDTO»»
export interface IJSONResult分页信息LotSerialNumberPlanPageQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«LotSerialNumberPlanPageQueryResponseDTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
