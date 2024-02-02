// JSONResult«List«员工基础响应 DTO»»
export interface IJSONResultList员工基础响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I员工基础响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 员工基础响应 DTO
export interface I员工基础响应DTO {
    // id
    id: number;
    // 员工工号
    code: string;
    // 员工姓名
    name: string;
    // 手机号码
    mobilePhone: string;
    // 入职日期
    entryTime: string;
    // 离职日期
    dimissionTime: string;
    // 出生日期
    birthday: string;
    // 性别
    gender: string;
    // 学历
    educational: string;
    // 籍贯
    nativePlace: string;
    // 任职部门id
    departmentId: number;
    // 邮箱
    email: string;
}
