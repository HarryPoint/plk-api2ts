// 流程任务转交人员查询DTO
export interface I流程任务转交人员查询DTO {
    // 流程id
    flowPathId: number;
    // 流程节点id
    flowPathNodeId: number;
    // 用户名称/编号
    nameOrCode: string;
    // 提交数据
    data;
    // 所属流程工单id
    flowPathWorkOrderId: number;
}
// JSONResult«List«员工响应对象»»
export interface IJSONResultList员工响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I员工响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 员工响应对象
export interface I员工响应对象 {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 出生日期
    birthday: string;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 员工工号
    code: string;
    // 员工姓名
    name: string;
    // 手机号码
    mobilePhone: string;
    // 班组id
    classGroupId: number;
    // 入职日期
    entryTime: string;
    // 离职日期
    dimissionTime: string;
    // 性别
    gender: string;
    // 学历
    educational: string;
    // 籍贯
    nativePlace: string;
    // 任职部门id
    departmentId: number;
    // 任职部门名称
    departmentName: string;
    // 任职职位id
    positionId: number;
    // 直属上级id
    higherUserId: number;
    // 邮箱
    email: string;
}
