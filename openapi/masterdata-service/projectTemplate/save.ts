// 项目模板编辑请求DTO
export interface I项目模板编辑请求DTO {
    // 项目id
    projectId: number;
    // 项目模板id
    id: number;
    // 项目模板名称
    name: string;
    // 项目模板大类
    projectCategory: string;
    // 项目模板简介
    intro: string;
    // 项目字段列表
    projectFields: IIdCodeNameGenericTransportObject[];
    // 项目团队是否勾选
    checkProjectTeam: string;
    // 项目成员是否勾选
    checkProjectMember: string;
    // 项目角色是否勾选
    checkProjectRole: string;
    // 项目计划是否勾选
    checkProjectPlan: string;
    // 项目计划字段
    projectPlanFields: IIdCodeNameGenericTransportObject[];
    // 项目计划自定义字段是否勾选
    checkProjectPlanCustomField: string;
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
