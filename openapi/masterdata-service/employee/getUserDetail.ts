import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/getUserDetailUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultUserDetailsVO>(
        {
            url: "/masterdata-service/employee/getUserDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«用户详细VO» */
export interface IJSONResultUserDetailsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserDetailsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 用户详细VO */
export interface IUserDetailsVO {
    /** id */
    id?: string;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 部门编码 */
    departmentCode?: string;
    /** 所属账号id */
    userId?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
    /** 班组编码 */
    classGroupCode?: string;
    /** 入职日期 */
    entryTime?: number;
    /** 离职日期 */
    dimissionTime?: number;
    /** 出生日期 */
    birthday?: number;
    /** 性别 */
    gender?: EUserDetailsVO_gender;
    /** 学历 */
    educational?: EUserDetailsVO_educational;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职职位id */
    positionId?: string;
    /** 职位名称 */
    positionName?: string;
    /** 职位编码 */
    positionCode?: string;
    /** 任职开始日期 */
    positionDate?: number;
}

export enum EUserDetailsVO_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}

export enum EUserDetailsVO_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}
