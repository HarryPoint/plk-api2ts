// 分页信息
export interface I分页信息 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 任务名称 - 关键字查询
    name: string;
    // 开始时间 - 开始范围
    beginTimeBegin: string;
    // 关联项目 - 下拉多选
    projectIdList: number[];
    // 开始时间 - 结束范围
    beginTimeEnd: string;
    // 任务状态 - 下拉多选
    projectTaskStatusList: string[];
    // 执行人 - 下拉多选
    leaderUserIdList: number[];
    // 优先级 - 下拉多选查询
    priorityList: string[];
    // 创建时间 - 结束范围
    createTimeEnd: string;
    // 备注 - 关键字查询
    remark: string;
    // 创建员工 - 下拉多选查询
    createUserIdList: number[];
    // 创建时间 - 开始范围
    createTimeBegin: string;
    // 创建时间 - Y - 正序， N - 倒序
    createTimeAsc: string;
}
// JSONResult«分页信息«KaizenProjectTaskResponseDTO»»
export interface IJSONResult分页信息KaizenProjectTaskResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«KaizenProjectTaskResponseDTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
