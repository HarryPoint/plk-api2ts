import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/公共相关/getClassGroupAndUserSelectorUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO1>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/getClassGroupAndUserSelector",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«List«Id，名称，编号VO»»_1
export interface IJSONResultListIdNameNumberVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdNameNumberVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称，编号VO_1
export interface IIdNameNumberVO1 {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 人员
    users: IEmployeeResponseObject[];
}
// 员工响应对象
export interface IEmployeeResponseObject {
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
