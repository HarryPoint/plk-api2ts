import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/角色相关/getRoleAuthByIdUsingGET
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultResponseToRolePermissionsAndEmployeeInformation>({
        url: "/plk-uaa-service/role/getRoleAuthById",
        method: "get",
        params,
    });
}
// JSONResult«角色权限及员工信息响应»
export interface IJSONResultResponseToRolePermissionsAndEmployeeInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRoleRightsAndEmployeeInformationResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 角色权限及员工信息响应
export interface IRoleRightsAndEmployeeInformationResponse {
    // id
    id: number;
    // 角色名
    name: string;
    // 角色编码
    code: string;
    // 角色描述
    description: string;
    // 勾选的权限码集
    permissionCodes: string[];
    // 路由对应的数据权限集
    dataAuths: IEnterpriseDataPermissionResponse[];
    // 应用级别
    applicationLevel: string;
    // 服务对象ID
    serviceObjectId: number;
    // 服务业务ID
    serviceBusinessId: number;
    // 用户集
    users: IEnterpriseUserEmployeeInformationResponse[];
}
// 企业数据权限响应
export interface IEnterpriseDataPermissionResponse {
    // 路由code
    routerCode: string;
    // 数据权限集
    dataAuthList: IEnterpriseDataPermissionListResponse[];
}
// 企业数据权限列表响应
export interface IEnterpriseDataPermissionListResponse {
    // 数据权限类型
    dataAuthType: string;
    // 数据权限对应的字段列表(只针对表单字段类型)
    roleDataAuthFieldList: ITheRoleDataPermissionFieldRespondsToTheDTO[];
}
// 角色数据权限字段响应DTO
export interface ITheRoleDataPermissionFieldRespondsToTheDTO {
    // 流程表单字段序列号
    appFieldSerialNo: string;
    // 流程表单字段名
    appFieldName: string;
}
// 企业用户员工信息响应
export interface IEnterpriseUserEmployeeInformationResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // 用户id
    userId: number;
    // 员工
    employee: IEmployeeInformationResponse;
}
// 员工信息响应
export interface IEmployeeInformationResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 手机号
    telephone: string;
    // 邮件
    email: string;
}
